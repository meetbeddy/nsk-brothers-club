
import { Route, Routes } from 'react-router-dom'
import Index from './landing/Index'
import PageNotFound from './landing/pages/404Page'
import Executives from './landing/pages/executives/Executives'
import Members from './landing/pages/members/Members'
import Membership from './landing/pages/membership/Membership'
import RegistrationForm from './landing/pages/membership/RegistrationForm'
import Resouces from './landing/pages/resources/Resouces'
import History from './landing/pages/history/History'
import Gallery from './landing/pages/gallery/GalleryPage'
import Board from './landing/board/Board'

function App() {




  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Index />} />
      <Route path="/executives" element={<Executives />} />
      <Route path="/history" element={<History />} />
      <Route path="/members" element={<Members />} />
      <Route path="/membership" element={<Membership />} >
        <Route path="registration" element={<RegistrationForm />} />
      </Route>
      <Route path="/resources" element={<Resouces />} />
      <Route path="/gallery" element={<Gallery />} />

    </Routes>
  )
}

export default App
