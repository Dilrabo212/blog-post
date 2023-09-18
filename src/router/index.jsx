import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../Layouts/MainLayout'
import { Home } from '../modules/Home'
import Repost from '../modules/Repost/Repost'
import InfoUser from '../modules/InfoUser/InfoUser'
import UserAcaunt from '../modules/UserAcaunt/UserAcaunt'
import Createpost from '../modules/Createpost/Createpost'


const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='*' element={<MainLayout />}>
        <Route path='*' element={<Home />} />
        <Route path=':postId' element={<UserAcaunt />} />
        <Route path=':userId' element={<InfoUser />} />
        <Route path='repost' element={<Repost />} />
        <Route path='createpost' element={<Createpost />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router
