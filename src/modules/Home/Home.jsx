import cls from './style.module.scss'
import { Grid } from '@mui/material'
import user1 from '../../image/ruser1.png'
import user2 from '../../image/ruser2.png'
import user3 from '../../image/ruser3.png'

import History from '../../components/History/History'
import MUICard from '../../components/MUI/MUICard'
import MuiCard from '../../components/MUI/MUICard/MUICard'
import Pagination from '../../components/MUI/Pagination/Pagination'
import PaginationRounded from '../../components/MUI/Pagination/Pagination'
import { Link } from 'react-router-dom'
import request from '../../services/httpRequest'
import { useEffect, useState } from 'react'



export const Home = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    request.get("posts")
      .then(res => {
        setPosts(res)
      })
  }, [])
  const [history, setHistory] = useState([])
  useEffect(() => {
    request.get("history")
      .then(res => {
        setHistory(res)
      })
  }, [])
  console.log(history);
  return (
    <div className={cls.home}>
      <div className='container'>
        <div className={cls.historyBoxs}>
          <Link to={'/user-acaunt'}>  <History data={history} /></Link>


          <div className={cls.userPostes}>
            <div className={cls.flex} >
              <MuiCard data={posts} />
            </div>
          </div>
          <div className={cls.wrp}>
            <PaginationRounded />
          </div>
        </div>
      </div>
    </div>
  )
}






