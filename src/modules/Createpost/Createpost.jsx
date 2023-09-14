import React from 'react'
import cls from './style.module.scss'
export default function Createpost() {
    return (
        <div className={cls.postContent}>
            <div className='container'>
                <div className={cls.createpost}>
                    <h1 className={cls.title}>Настройки публикации</h1>
                    <label className={cls.nameTitle} htmlFor="">Название
                        <input className={cls.inp} type="text" placeholder='Text input' />
                    </label>
                    <label className={cls.nameText} htmlFor="">Описание
                        <textarea className={cls.textarea} name="postText" id="1" cols="30" rows="10">Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов. Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления знаний о внешней тексту действительности.</textarea>
                    </label>
                </div>
            </div>
        </div>
    )
}
