import cls from './styles.module.scss'
import { LogoFooter } from '../../svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return <footer className={cls.footer}>
    <div className='container'>
      < div className={cls.container}>
        <div className={cls.aboutConeiner}>
          <div className={cls.logoAndText}>
            <div className={cls.logo}> <LogoFooter link={"/"} /></div>
            <p className={cls.footertext}>Помощник в публикации статей, журналов.
              Список популярных международных конференций.
              Всё для студентов и преподавателей.</p>
          </div >
          <div className={cls.card}>
            <b>Ресурсы</b>
            <ul>
              <li><Link to={"/"}>Статьи </Link></li>
              <li><Link to={"/"}>Журналы</Link></li>
              <li><Link to={"/"}>Газеты </Link></li>
              <li><Link to={"/"}>Диплом </Link></li>
            </ul>
          </div>
          <div className={cls.card}>
            <b>О нас</b>
            <ul>
              <li><Link to={"/"}>Контакты </Link></li>
              <li><Link to={"/"}>Помощь</Link></li>
              <li><Link to={"/"}>Заявки </Link></li>
              <li><Link to={"/"}>Политика </Link></li>
            </ul>
          </div>
          <div className={cls.card}>
            <b>Помощь</b>
            <ul>
              <li> <Link to={"/home"}>Часто задаваемые вопросы</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className={cls.copyright}>Copyright © 2020. LogoIpsum. All rights reserved.</p>
    </div>
  </footer>
}
