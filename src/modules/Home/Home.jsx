import cls from './style.module.scss'
import History from '../../components/History/History'
import MuiCard from '../../components/MUI/MUICard/MUICard'
import PaginationRounded from '../../components/MUI/Pagination/Pagination'
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
  const [url, setUrl] = useState([])
  useEffect(() => {
    request.get("history")
      .then(res => {
        setUrl(res)
      })
  }, [])
  return (
    <div className={cls.home}>
      <div className='container'>
        <div className={cls.historyBoxs}>
          <History data={url} />
          <div className={cls.userPostes}>
            <MuiCard data={posts} />
          </div>
          <div className={cls.wrp}>
            <PaginationRounded />
          </div>
        </div>
      </div>
    </div>
  )
}






