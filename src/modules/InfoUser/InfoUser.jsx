import React, { useEffect, useState } from 'react'
import sty from './style.module.scss'
import dilorom from '../../image/dilorom.png'
import PostCard from '../../components/PostCard/PostCard'
import { Link, useLocation, useParams } from 'react-router-dom'
import request from '../../services/httpRequest'
export default function InfoUser() {
    const { userId } = useParams()

    let { pathname } = useLocation()
    pathname = pathname.substring(1)

    const [post, setPost] = useState([])
    useEffect(() => {
        request.get(`/posts?userId=${userId}`)
            .then(res => {
                setPost(res)
            })
    }, [])

    console.log(post);
    const [user, setUser] = useState({})
    useEffect(() => {

        request.get(`/users/${userId}`)
            .then(res => {
                setUser(res)
            })

    }, [post?.userId])


    return (
        <div className='container'>
            <div className={sty.InfoUser}>
                <Link to={`/userInfo/${user?.id}`} > <img className={sty.userPhoto} src={user?.image} alt="acauntPhoto" /></Link>

                <div>
                </div>
                <div className={sty.info}>

                    <h2 className={sty.name}>{user?.name}</h2>
                    <tr>
                        <td>Карьера</td>
                        <td>{user?.career}</td>
                    </tr>
                    <tr>
                        <td>Дата рождения</td>
                        <td>{user?.date}</td>
                    </tr>
                    <tr>
                        <td>Место рождения</td>
                        <td>{user?.place}</td>
                    </tr>

                </div>
            </div>
            <h2>ПУБЛИКАЦИИ</h2>
            <div className={sty.newpost}>
                {
                    post.map((post) => {
                        return <PostCard
                            image={post.image}
                            title={post.title}
                            date={post.created_at}
                            body={post.body}
                            views={post.views}
                        />
                    })
                }

            </div>
        </div>
    )
}
