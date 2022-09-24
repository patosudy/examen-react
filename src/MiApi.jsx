import React, {useEffect, useState} from 'react'

export const MiApi = () => {
  const [info, setInfo] = useState([])

  const priv_key = ''
  const pub_key  = ''
  const hash = CryptoJ

  const consultarsuperheroes = async () => {
    const url = 'https://superheroapi.com/api/10228117681868807';
    const res = await fetch(url);
    const info = await res.json();
    console.log(info);
  }

  useEffect(() => {
    setInfo(consultarsuperheroes);
  }, [])
  


  return (
        <>
          <div className= "container-fluid" >
            <div className="mt-5"><p className="h6">Consulta superheroes</p></div>
              <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="ingresa su nombre" aria-label="search"/>
                  <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            <div><button type="button" className="btn btn-warning mt-4">ordenar</button></div>
            <div className= "container mt-4">
              <div className="card">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img src="/assets/images/superheroes.jpeg" className="img-thumbnail" alt="..."/>
                      </div>
                      <div className="col">
                        Column
                      </div>
                    <div className="col-6">
                      Column
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </>
  )
}
