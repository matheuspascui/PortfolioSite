import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BusinessCard from './pages/BusinessCard'
import UnderConstruction from './pages/UnderConstruction'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home/> } />
          <Route path='businesscard' element={ <BusinessCard/> } />
          <Route path='underconstruction' element={ <UnderConstruction/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
