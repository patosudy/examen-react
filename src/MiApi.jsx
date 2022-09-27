import React, {useEffect, useState} from 'react'
import md5 from 'js-md5';

const PUBLIC_KEY = '85a94d0fb18d842c0c7b8b701b4a206a'; // your public key
const PRIVATE_KEY = '9e45f2e453825ac75fee5751d9e44ce965715877'; // youur private key

export const MiApi = () => {
  const [heroes, setHeroes] = useState([])
  const [ordenar, setOrdenar] = useState('name')
  const [nombre, setNombre] = useState("")

  const handleOrdenar = (e) =>{
      setOrdenar(e.target.value);
  }

  const handleInputNombre = (e) => {
    setNombre(e.target.value);
  }
  
  const buscarNombre = async (e) => {
    e.preventDefault();
    /** ME LO PIDE LA API DE MARVEL, LO VIMOS EN UN VIDEO TUTORIAL 
    https://developer.marvel.com/docs
    */
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    //** ME LO PIDE LA API DE MARVEL, LO VIMOS EN UN VIDEO TUTORIAL */
    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${nombre}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
       const info = await response.json();
       setHeroes( info.data.results );
    } catch (error) {
      console.log(error);
    }
  }

  const consultarsuperheroes = async () => {
    /** ME LO PIDE LA API DE MARVEL, LO VIMOS EN UN VIDEO TUTORIAL 
    https://developer.marvel.com/docs
    */
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    //** ME LO PIDE LA API DE MARVEL, LO VIMOS EN UN VIDEO TUTORIAL */
    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=${ordenar}&limit=40&apikey=${PUBLIC_KEY}&hash=${hash}`);
       const info = await response.json();
       setHeroes( info.data.results );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    consultarsuperheroes();
  }, [ordenar])
  
  console.log(heroes);

  return (
        <>
          <div className= "container-fluid" >

            <div className='container'>
              <div className="row">
                <div className="col">
                
              <form className="form-inline" onSubmit={buscarNombre}>
                    
                  <div className="input-group mb-3">
                  <input type="text" className="form-control" 
                    onChange={handleInputNombre} value={nombre} 
                    placeholder="Buscar por nombre" aria-label="Buscar por nombre" aria-describedby="button-addon2"/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="submit" id="button-addon2">
                      Buscar
                    </button>
                  </div>
                </div>
              </form>
                    
                
                </div>

                <div className="col-2">
               
                    <select className="form-control" id="exampleFormControlSelect1"
                      value={ordenar}
                      onChange={handleOrdenar}
                    >
                      <option value="name">Ordenar A-Z</option>
                      <option value="-name">Ordenar Z-A</option>
                    </select>
                 
                </div>
              </div>
              <a href="/" >Limpiar</a>
            </div>
            
            <div className= "container mt-4">
                  
                  {heroes.length > 0
                  ?
                    <>
                    { heroes.map( (heroe) => 
                      <div className="card m-2 shadow rounded-lg" key={heroe.id}>
                      <div className="card-body">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <img src={heroe.thumbnail.path + '.' + heroe.thumbnail.extension} className="img-thumbnail" alt={heroe.name} />
                            </div>
                            <div className="col">
                              {heroe.name}
                            </div>
                            <div className="col-6">
                              {heroe.description === "" ? "Sin información" : heroe.description }
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                      )
                    }
                    </>
                  : <>
                      <div>No hay información</div>
                    </>
                  }

                 
                
            </div>
          </div>
        </>
  )
}
