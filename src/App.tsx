import { Route } from 'wouter'
import './App.css'
import BuildYourPlan from './pages/build-your-plan'
import Home from './pages/home'
import Thanks from './pages/thanks'

function App () {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/arma-tu-plan" component={BuildYourPlan} />
      <Route path="/gracias" component={Thanks} />
    </>
  )
}

export default App
