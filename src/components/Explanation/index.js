import React from 'react'

export default function Explanation() {
  return (
    <div id="rule">
      <h2>Regra do tombo para Derivadas</h2>
      <span>
        <em>
          Se f (x) = x<sup>a</sup>, então f ' (x) = a·x<sup>a – 1</sup>
        </em>
      </span>
      <br />
      <br />
      <h3>Vamos explicar agora de uma forma um pouco mais clara...</h3>
      <span>
        Na fórmula acima temos x elevado ao número 'a' ( x <sup>a</sup> ),
        quando utilizamos a regra do tombo colocamos o número elevado (a) na
        frente do x e o multiplicamos a por x (a.x) e na potencia subtraímos a
        por menos um ( x <sup>a-1</sup> ). <br /> Dessa forma a função f ( x ) =
        x<sup>a</sup> na regra do tombo ficará f ' ( x ) = a·x <sup>a – 1</sup>
      </span>
      <br />
      <br />
      <h4>Vamos ver um exemplo na prática.</h4>
      <span>
        Vamos calcular a derivada de f ( x ) = x <sup>3</sup>
      </span>
      <br />
      <br />
      <span>
        f'( x ) = 3x <sup>3-1</sup> =
        <strong>
          3<sup>2</sup>
        </strong>
      </span>
    </div>
  )
}
