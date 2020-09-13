import React, { useState } from 'react'
import Calculo from '../Calculo'

import './styles.css'

export default function Pratice() {
  const [showForms, setShowForms] = useState(false)
  const [number, setNumer] = useState(0)
  const [expo, setExpo] = useState(1)

  const handleNumber = (e) => {
    setNumer(e.target.value)
    setShowForms(false)
  }

  const handleExpo = (e) => {
    setExpo(e.target.value)
    setShowForms(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowForms(false)

    if (number < 1) {
      alert('Por favor informe um número maior que 0.')
      console.log('entrou')
      return
    }

    if (expo >= 1) {
      setShowForms(true)
    }
  }

  return (
    <div id="calcule">
      <h4>Vamos praticar um pouco.</h4>
      <div className="formCalc">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="number">Entre com um número: </label>
            <input
              type="number"
              name="number"
              id=""
              min="0"
              value={number}
              onChange={(e) => handleNumber(e)}
            />
          </div>
          <div>
            <label htmlFor="expo">Informe um número para o expoente: </label>
            <input
              type="number"
              name="expo"
              id=""
              min="1"
              value={expo}
              onChange={(e) => handleExpo(e)}
            />
          </div>
          <input type="submit" value="Derivar" />
        </form>
        {showForms && <Calculo number={number} expo={expo} />}
      </div>
    </div>
  )
}
