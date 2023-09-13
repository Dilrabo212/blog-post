import cls from './style.module.scss'
import user1 from '../../image/Ellipse 158.png'
import user2 from '../../image/user2.png'
import user3 from '../../image/user3.png'
export default function History() {
    return (
        <div className={cls.historyBoxs}>
            <h2 className={cls.title}>История последних новостей</h2>
            <div className={cls.historyWrp}>

                <div className={cls.gredientLineWrp}>
                    <div className={cls.gredientLine}>
                        <img src={user1} />
                    </div>
                </div>
                <div className={cls.gredientLineWrp}>
                    <div className={cls.gredientLine}>
                        <img src={user2} />
                    </div>
                </div>
                <div className={cls.gredientLineWrp}>
                    <div className={cls.gredientLine}>
                        <img src={user3} />
                    </div>
                </div>
                <div className={cls.gredientLineWrp}>
                    <div className={cls.gredientLine}>
                        <img src={user1} />
                    </div>
                </div>
                <div className={cls.gredientLineWrp}>
                    <div className={cls.gredientLine}>
                        <img src={user2} />
                    </div>
                </div>
            </div>
        </div >
    )
}
