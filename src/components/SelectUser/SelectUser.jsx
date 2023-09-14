import React from 'react'
import sty from './style.module.scss'
import dilorom from '../../image/dilorom.png'
import { User } from '../../svg'
export default function SelectUser() {
    return (
        <div>

            <select className={sty.select} >
                <option value=""></option>
                <option className={sty.option}>Написать публикацию</option>
                <option className={sty.option} >Избранные</option>
                <option className={sty.option} >Выйти</option>
            </select>

        </div>
    )
}
