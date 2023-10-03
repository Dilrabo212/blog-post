import React from 'react'
import cls from './style.module.scss'
import { useForm } from 'react-hook-form';
import request from '../../services/httpRequest';
export default function Createpost() {
    const { register, handleSubmit, reset } = useForm();
    const userData = JSON.parse(localStorage.getItem('userData'))
    const onSubmit = (formData) => {
        const data = {
            "userId": userData.id,
            "id": Date.now(),
            "title": formData.title,
            "body": `<p>${formData.text}</p>`,
            "created_at": new Date().toISOString(),
            "views": 326,
            "image": "https://picsum.photos/360/300/?random=1"
        }

        request.post("/posts", data).then((res) => {
            reset();
            alert("Публикация добавлена");
        })
    }


    return (
        <div className={cls.postContent}>
            <div className='container'>
                <form className={cls.createpost} onSubmit={handleSubmit(onSubmit)}>
                    <h1 className={cls.title}>Настройки публикации</h1>
                    <label className={cls.nameTitle} htmlFor="">Название
                        <input className={cls.inp}
                            {...register("title")}
                            type="text"
                            placeholder='Text input' />
                    </label>
                    <label className={cls.nameText} htmlFor="">Описание
                        <textarea className={cls.textarea}
                            {...register("text")}
                            cols="30" rows="10"></textarea>
                        <button className={cls.btn} type='submit'> submit</button>
                    </label>
                </form >
            </div>
        </div>
    )
}
