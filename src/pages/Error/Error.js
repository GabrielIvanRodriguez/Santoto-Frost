import React from 'react'
import {useNavigate } from 'react-router-dom'
import './Error.css'

const Error = () => {
    const navigate = useNavigate();
  return (
    <section className="p-0  bg-img cover-background" style={{backgroundImage: "url(https://bootdey.com/img/Content/bg1.jpg)"}}>
        <div className="container-fluid d-flex flex-column">
            <div className="row align-items-center justify-content-center min-vh-100">
                <div className="col-md-9 col-lg-6 my-5">
                    <div className="text-center error-page">
                        <h1 className="mb-0 text-secondary">404</h1>
                        <h2 className="mb-4 text-white">Parece que algo salio mal</h2>
                        <p className="w-sm-80 mx-auto mb-4 text-white">La página que solicitaste no existe. Vuelve al inicio para seguir comprando</p>
                        <div>
                            <button onClick={() => navigate(-1)} type="button" className="btn btn-success mt-2 btn-sm btn3d">Volver </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Error