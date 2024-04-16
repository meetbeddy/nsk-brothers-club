
import { Route, Routes } from 'react-router-dom'
import Index from './landing/Index'
import PageNotFound from './landing/pages/404Page'
import Executives from './landing/pages/executives/Executives'
import Members from './landing/pages/members/Members'
import Membership from './landing/pages/membership/Membership'
import RegistrationForm from './landing/pages/membership/RegistrationForm'

function App() {




  return (
    <Routes>\
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Index />} />
      <Route path="/executives" element={<Executives />} />
      <Route path="/members" element={<Members />} />
      <Route path="/membership" element={<Membership />} >
        <Route path="registration" element={<RegistrationForm />} />
      </Route>

    </Routes>
  )
}

export default App
