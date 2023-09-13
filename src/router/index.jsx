import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../Layouts/MainLayout'
import { Home } from '../modules/Home'
import UserAcaunt from '../components/UserAcaunt/UserAcaunt'
import InfoUser from '../components/InfoUser/InfoUser'
import Repost from '../components/Repost/Repost'


const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='*' element={<MainLayout />}>
        <Route path='*' element={<Home />} />
        <Route path='useracaunt' element={<UserAcaunt />} />
        <Route path='infouser' element={<InfoUser />} />
        <Route path='repost' element={<Repost />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router
