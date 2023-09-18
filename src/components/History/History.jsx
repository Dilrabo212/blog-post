import cls from './style.module.scss'
import { Link } from 'react-router-dom'
export default function History({ data }) {
    console.log(data);
    return (
        <div className={cls.historyBoxs}>
            <h2 className={cls.title}>История последних новостей</h2>
            <div className={cls.historyWrp}>


                {
                    data.map((el) => {
                        return (
                            <Link to={`${el.id}`}>
                                <div className={`${cls.gredientLineWrp} ${el.isViewed && cls.viewed}`}>
                                    <div className={cls.gredientLine}>
                                        {
                                            <img src={el.url} alt='history' />
                                        }
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}
