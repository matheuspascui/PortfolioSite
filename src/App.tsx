import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BusinessCard from './pages/BusinessCard'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home/> } />
          <Route path='businesscard' element={ <BusinessCard/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
