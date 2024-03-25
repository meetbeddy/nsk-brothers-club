
import { Route, Routes } from 'react-router-dom'
import Index from './landing/Index'
import PageNotFound from './landing/pages/404Page'
import Executives from './landing/pages/executives/Executives'
import Members from './landing/pages/members/Members'

function App() {


  return (
    <Routes>\
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Index />} />
      <Route path="/executives" element={<Executives />} />
      <Route path="/members" element={<Members />} />

    </Routes>
  )
}

export default App
