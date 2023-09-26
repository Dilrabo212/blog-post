import React, { useState } from 'react'
import sty from './style.module.scss'

import { clsx } from 'clsx';


export default function SelectUser({ openSel }) {

    return (
        <div>
            <div className={clsx(sty.selectBox, { [sty.open]: openSel })}>
                <div className={sty.option}>Написать публикацию</div>
                <div className={sty.option} >Избранные</div>
                <div className={sty.option}>Выйти</div>
            </div>
        </div>
    )
}

