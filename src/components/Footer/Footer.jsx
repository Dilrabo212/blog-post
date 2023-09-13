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
              <Link to={"/"}><li>Статьи</li></Link>
              <Link to={"/"}><li>Журналы</li></Link>
              <Link to={"/"}> <li>Газеты</li></Link>
              <Link to={"/"}><li>Диплом</li></Link>
            </ul>
          </div>
          <div className={cls.card}>
            <b>О нас</b>
            <ul>
              <Link to={"/"}><li>Контакты</li></Link>
              <Link to={"/"}><li>Помощь</li></Link>
              <Link to={"/"}> <li>Заявки</li></Link>
              <Link to={"/"}><li>Политика</li></Link>
            </ul>
          </div>
          <div className={cls.card}>
            <b>Помощь</b>
            <ul>
              <Link to={"/home"}><li>Часто задаваемые вопросы</li></Link>
            </ul>
          </div>
        </div>
      </div>
      <p className={cls.copyright}>Copyright © 2020. LogoIpsum. All rights reserved.</p>
    </div>
  </footer>
}
