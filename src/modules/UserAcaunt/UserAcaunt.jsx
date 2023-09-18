import React, { useEffect, useState } from 'react'
import cls from './style.module.scss'
import { Link, useLocation, useParams } from 'react-router-dom'
import FollowBtn from '../../components/Buttons/Follow/FollowBtn'
import SaveBTN from '../../components/Buttons/SaveBTN/SaveBTN'
import request from '../../services/httpRequest'
export default function UserAcaunt({ }) {
    const { postId } = useParams()

    let { pathname } = useLocation()
    pathname = pathname.substring(1)

    const [post, setPost] = useState({})
    useEffect(() => {
        request.get(`/posts/${postId}`)
            .then(res => {
                setPost(res)
            })
    }, [])

    const [user, setUser] = useState({})
    useEffect(() => {
        if (post?.userId) {
            request.get(`/users/${post?.userId}`)
                .then(res => {
                    setUser(res)
                })
        }
    }, [post?.userId])
    console.log(post);
    return (


        <div className="container">
            <div className={cls.wrapper}>
                <div className={cls.userInfo}>
                    <Link to={'/'}> <img className={cls.userPhoto} src={post?.image} alt="acauntPhoto" /></Link>
                    <span className={cls.userName}>{user?.name}</span>
                    <div className={cls.buttonsWrap}>
                        <FollowBtn />
                        <SaveBTN />

                    </div>
                </div>
                <div className={cls.midleContainer}>
                    <div className={cls.postWrp}>
                        <img className={cls.image} src={post?.image} alt="postes material" />
                        <span className={cls.userNames}>Фото:{user?.name}</span>
                        <div className={cls.wrapper}>
                            <span>{post?.created_at}</span>
                            <span>| <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.63913 8.00004C2.48846 5.29537 5.0158 3.33337 8.00046 3.33337C10.9858 3.33337 13.5125 5.29537 14.3618 8.00004C13.5125 10.7047 10.9858 12.6667 8.00046 12.6667C5.0158 12.6667 2.48846 10.7047 1.63913 8.00004Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>{post?.views}</span>

                        </div>
                    </div>
                    <div className={cls.infoSection}>
                        <h2 className={cls.postName}>{post?.title}
                        </h2>
                        <p className={cls.postText}>
                            {post?.body}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}
