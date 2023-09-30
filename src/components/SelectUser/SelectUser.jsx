import React, { useState } from 'react'
import sty from './style.module.scss'

import { clsx } from 'clsx';


export default function SelectUser({ }) {
    return (
        <>
            <div className={clsx(sty.selectBox, { [sty.open]: false })}
                openSelect={false}
            >
                <div className={sty.option}>Написать публикацию</div>
                <div className={sty.option} >Избранные</div>
                <div className={sty.option}>Выйти</div>
            </div>
        </>
    )
}

