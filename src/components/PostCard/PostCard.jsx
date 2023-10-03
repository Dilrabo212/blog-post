import React from 'react'
import sty from './style.module.scss'
import meeting from '../../image/meeting.png'

export default function PostCard({ image, views, title, date, body }) {


    console.log({ image, views, title, date, body })


    return (
        <div className={sty.postCard}>
            <div className={sty.img}>
                <img src={image} alt="img" />
            </div>
            <div className={sty.wrapContent}>
                <div className={sty.infoTitle}>
                    {title}
                </div>
                <div className={sty.date}>
                    <span>{date}</span>
                    <span>
                        |<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.63916 8.00004C2.48849 5.29537 5.01583 3.33337 8.00049 3.33337C10.9858 3.33337 13.5125 5.29537 14.3618 8.00004C13.5125 10.7047 10.9858 12.6667 8.00049 12.6667C5.01583 12.6667 2.48849 10.7047 1.63916 8.00004Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> {views}
                    </span>
                    <span className={sty.blueText}>Права человека</span>
                </div>
                <p dangerouslySetInnerHTML={{ __html: body }} />
            </div>
        </div >
    )
}
