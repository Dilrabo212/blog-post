import cls from './style.module.scss'
import user1 from '../../image/Ellipse 158.png'
import user2 from '../../image/user2.png'
import user3 from '../../image/user3.png'
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
                                <div className={cls.gredientLineWrp}>
                                    <div className={cls.gredientLine}>
                                        {
                                            <img src={el.image} alt="history" />
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
