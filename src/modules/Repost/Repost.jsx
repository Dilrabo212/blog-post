import React from 'react'
import sty from './style.module.scss'
import dilorom from '../../image/dilorom.png'
import PostCard from '../../components/PostCard/PostCard'
import SelectUser from '../../components/SelectUser/SelectUser'
export default function Repost() {
    return (
        <div className='container'>
            <div className={sty.InfoUser}>
                <SelectUser />
                <div>
                    <img src={dilorom} alt="photo user" /></div>
                <div className={sty.info}>
                    <h2 className={sty.name}>Дилором Алиева</h2>

                    <tr>
                        <td>Карьера</td>
                        <td>Писатель</td>
                    </tr>
                    <tr>
                        <td>Дата рождения</td>
                        <td>2 ноября, 1974  ( 46 лет)</td>
                    </tr>
                    <tr>
                        <td>Место рождения</td>
                        <td>Черняховск, СССР (Россия)</td>
                    </tr>
                </div>
            </div>
            <h2>ПУБЛИКАЦИИ</h2>
            <div className={sty.newpost}>
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}
