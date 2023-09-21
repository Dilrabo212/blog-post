import { Link } from 'react-router-dom'
import { Kalakolchik, Logo } from '../../svg'
import RegistrationModal from '../MUI/Modal/RegistrationModal/RegistrationModal'
import cls from './styles.module.scss'
import EnterModal from '../MUI/Modal/EnterModal/EnterModal'
import { useState } from 'react'
import LoginModal from '../MUI/Modal/LoginModal/LoginModal'

export const Header = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [openRegister, setOpenRegister] = useState(false);
  const handleOpenRegister = () => {
    setOpenRegister(true);
    handleClose();
  }
  const handleCloseRegister = () => setOpenRegister(false);


  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLog = () => {
    setOpenLogin(true);
    handleCloseRegister();
  }
  const handleCloseLog = () => setOpenLogin(false);

  const userData = JSON.parse(localStorage.getItem('userData'))

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
        <Logo link="/" />
        <nav className={cls.navStyle}>

          {
            items.map(el =>
              <Link className={cls.cheked} to={el.link} key={el.id}>
                {el.name}
              </Link>
            )
          }
        </nav>
        <button className={cls.kalakolchik}>
          <Kalakolchik /><div className={cls.kalakolchikShotchik}>1</div>
        </button>
        <EnterModal onRegisterClick={handleOpenRegister} open={open} handleClose={handleClose} />
        <RegistrationModal onLoginClik={handleOpenLog} open={openRegister} handleClose={handleCloseRegister} />
        <LoginModal onLoginClik={handleOpenLog} open={openLogin} handleClose={handleCloseLog} />
        {
          userData && userData.id
            ?
            <button className={cls.btnImage}>
              <img className={cls.userPhoto}
                src={userData?.image} alt='userData name' />
            </button>
            :
            <button className={cls.btn} onClick={handleOpen}>Войти</button>
        }

      </header>
    </div>
  </div>
}
