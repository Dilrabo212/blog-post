import React, { useContext } from 'react'
import sty from './style.module.scss'
import dilorom from '../../image/dilorom.png'
import { User } from '../../svg'
import request from '../../services/httpRequest'
export default function SelectUser({ CloseSel, OpenSel, openSelClick }) {

    return (
        <div>

            <select className={sty.select}>

                <option
                    onClick={openSelClick}
                    className={sty.select}
                    open={OpenSel}
                    onClose={CloseSel}
                    value=""></option>
                <option className={sty.option}>Написать публикацию</option>
                <option className={sty.option} >Избранные</option>
                <option className={sty.option}>Выйти</option>
            </select>

        </div>
    )
}
