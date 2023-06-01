import React from 'react'

const Spinner = () => {
    return (
        <div className="clearfix m-5">
            <div className="spinner-border float-center m-5" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    )
}

export default Spinner