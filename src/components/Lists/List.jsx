import React from 'react'
import cls from './style.module.scss'
import { Dot, VektorL, VektorR } from '../../svg'

export default function List() {
    return (
        <div className={cls.list}>

            <span className={cls.styleListOpacity}><VektorL /></span>
            <span className={cls.styleListActive}>1</span>
            <span className={cls.styleList}>2</span>
            <span className={cls.styleList}>3</span>
            <span className={cls.styleList}>4</span>
            <span className={cls.styleList}>5</span>
            <span className={cls.styleList}><Dot /></span>
            <span className={cls.styleList}>86</span>
            <span className={cls.styleList}><VektorR /></span>

        </div>
    )
}
