import React from 'react'

import './styles.css'

export default function Calculo({ number, expo }) {
  return (
    <div className="derivada">
      <div>
        <p>
          {'f(x) = '}
          {number}
          <sup>{expo}</sup>
        </p>
      </div>
      <div className="result">
        <p>
          {"f'(x) = "}
          {expo * number}
          {expo - 1 >= 2 && <sup>{expo - 1}</sup>}
        </p>
      </div>
    </div>
  )
}
