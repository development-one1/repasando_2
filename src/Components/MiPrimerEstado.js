import React, { useState } from 'react'

export const MiPrimerEstado = () => {

    // Nombre
    // let nombre = "Andres Felipe"

    // const cambiarNombre = e => {
    //     nombre = "Jesus";
    // };

    const [nombre, setNombre] = useState("Andres Felipe");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
        console.log(e.target)
    } 

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>

        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre (e, "camacho") }>
         cambiar nombre 
        </button>
        &nbsp;
        <input type='text' onKeyUp={e => cambiarNombre (e,  e.target.value)} placeholder='Cambiar el nombre'/>
    </div>
  )
}
