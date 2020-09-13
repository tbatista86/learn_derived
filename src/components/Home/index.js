import React from 'react'

import './styles.css'

export default function Home() {
  return (
    <div id="home">
      <h1>Derivada</h1>
      <p>
        No cálculo, a derivada em um ponto de uma função y = f(x) representa a
        taxa de variação instantânea de y em relação a x neste ponto. Um exemplo
        típico é a função velocidade que representa a taxa de variação
        (derivada) da função espaço. Do mesmo modo, a função aceleração é a
        derivada da função velocidade. Geometricamente, a derivada no ponto x=a
        de y = f(x) representa a inclinação da reta tangente ao gráfico desta
        função no ponto (a,~f(a)).A função que a cada ponto x associa a derivada
        neste ponto de f(x) é chamada de função derivada de f(x).
      </p>
      <span>
        Fonte:{' '}
        <a href="https://pt.wikipedia.org/wiki/Derivada">pt.wikipedia.org</a>
      </span>
    </div>
  )
}
