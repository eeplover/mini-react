import miniReact from '../mini-react'
import MiniReact from '../mini-react'

function Couter() {
  const [state, setState] = MiniReact.useState(1)
  return (
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
  )
}
const element = <Couter/>

miniReact.render(element, document.getElementById('app'))
