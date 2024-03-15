
import { Route, Routes } from 'react-router-dom'
import Index from './landing/Index'
import PageNotFound from './landing/pages/404Page'

function App() {


  return (
    <Routes>\
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Index />} />

    </Routes>
  )
}

export default App
