// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Kalakolchik, Logo } from '../../svg'
import SmButton from '../Buttons/SmButton'
import RegistrationModal from '../MUI/Modal/SignInModal/SigninModal'
import cls from './styles.module.scss'
import EnterModal from '../MUI/Modal/EnterModal/EnterModal'

export const Header = () => {

  const items = [
    { id: 1, link: '/home', name: 'Все потоки' },
    { id: 2, link: '/razrabotka', name: 'Разработка' },
    { id: 3, link: '/administrirovaniya', name: 'Администрирование' },
    { id: 4, link: '/dizayn', name: 'Дизайн' },
    { id: 5, link: '/menegment', name: 'Менеджмент' },
    { id: 6, link: '/nauchop', name: 'Научпоп' },
  ]


  return <div className={cls.wraphead}>
    <div className='container' >
      <header className={cls.header}>
        <Logo link="/home" />
        <nav className={cls.navStyle}>

          {
            items.map(el =>
              <Link className={cls.cheked} to={el.link} key={el.id}>
                {el.name}
              </Link>
            )
          }
          {/* <ul>
            <li className={cls.chekedAktive}>Все потоки</li>
            <li className={cls.cheked}>Разработка</li>
            <li className={cls.cheked}>Администрирование</li>
            <li className={cls.cheked}>Дизайн</li>
            <li className={cls.cheked}>Менеджмент</li>
            <li className={cls.cheked}>Маркетинг</li>
            <li className={cls.cheked}>Научпоп</li>
          </ul> */}
        </nav>
        <button className={cls.kalakolchik}>
          <Kalakolchik /><div className={cls.kalakolchikShotchik}>1</div>
        </button>
        {/* <SmButton /> */}
        <EnterModal />

      </header>
    </div>
  </div>
}
