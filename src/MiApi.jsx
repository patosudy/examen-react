import React, {useEffect, useState} from 'react'
import md5 from 'js-md5';

const PUBLIC_KEY = '85a94d0fb18d842c0c7b8b701b4a206a'; // your public key
const PRIVATE_KEY = '9e45f2e453825ac75fee5751d9e44ce965715877'; // youur private key

export const MiApi = () => {
  const [heroes, setHeroes] = useState([])
  const [ordenar, setOrdenar] = useState('name')

  const handleOrdenar = (e) =>{
      setOrdenar(e.target.value);
  }

  const buscarNombre = async () => {
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    
    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=${ordenar}&limit=20&query=Batman&apikey=${PUBLIC_KEY}&hash=${hash}`);
       const info = await response.json();
       setHeroes( info.data.results );
    } catch (error) {
      console.log(error);
    }
  }

  const consultarsuperheroes = async () => {
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    
    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=${ordenar}&limit=20&apikey=${PUBLIC_KEY}&hash=${hash}`);
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
              <form className="form-inline">
              <div class="row">
                <div class="col">
                
                    
                  <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Buscar por nombre" aria-label="Buscar por nombre" aria-describedby="button-addon2" />
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
                  </div>
                </div>
                    
                
                </div>

                <div class="col-2">
               
                    <select class="form-control" id="exampleFormControlSelect1"
                      value={ordenar}
                      onChange={handleOrdenar}
                    >
                      <option value="name">Ordenar A-Z</option>
                      <option value="-name">Ordenar Z-A</option>
                    </select>
                 
                </div>
              </div>

              </form>
            </div>
            
            <div className= "container mt-4">
                  
                  {heroes.length > 0
                  ?
                    <>
                    { heroes.map( (heroe) => 
                      <div className="card m-2 shadow rounded">
                      <div className="card-body">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <img src={heroe.thumbnail.path + '.' + heroe.thumbnail.extension} className="img-thumbnail" alt="..."/>
                            </div>
                            <div className="col">
                              {heroe.name}
                            </div>
                            <div className="col-6">
                              {heroe.description === "" ? "Sin información": heroe.description}
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
