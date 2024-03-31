import React, { useState } from 'react'

export const EjercicioComponent = ({year}) => {

  const [yearNow, setYearNow] = useState(year)

  const siguiente = e => {
    setYearNow(yearNow+1);
  }

  const anterior = e => {
    // let operacion = yearNow - 1;
    // setYearNow(operacion);
    setYearNow(yearNow-1);
  }

  return (
    <div>
        <h2>Ejercicio con Eventos y UseState</h2>
        <strong className='label label-green'>
            {yearNow}
        </strong>
        <p>
          <button onClick={siguiente}>SIGUIENTE</button>
          &nbsp;
          <button onClick={anterior}>ANTERIOR</button>
        </p>
    </div>
  )
}
