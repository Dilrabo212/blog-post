import { Link } from 'react-router-dom'
import { Kalakolchik, Logo } from '../../svg'
import RegistrationModal from '../MUI/Modal/RegistrationModal/RegistrationModal'
import cls from './styles.module.scss'
import EnterModal from '../MUI/Modal/EnterModal/EnterModal'
import { useEffect, useState } from 'react'
import LoginModal from '../MUI/Modal/LoginModal/LoginModal'
import { isValidJSON } from '../../utils/isValidJSON'
import { useRef } from 'react'

export const Header = ({ }) => {

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

  const userDataStr = localStorage.getItem('userData')

  let userData = {}

  if (isValidJSON(userDataStr)) {
    userData = JSON.parse(userDataStr)
  }

  const [openSel, setOpenSel] = useState(false)

  const items = [
    { id: 1, link: '/home', name: 'Все потоки' },
    { id: 2, link: '/razrabotka', name: 'Разработка' },
    { id: 3, link: '/administrirovaniya', name: 'Администрирование' },
    { id: 4, link: '/dizayn', name: 'Дизайн' },
    { id: 5, link: '/menegment', name: 'Менеджмент' },
    { id: 6, link: '/nauchop', name: 'Научпоп' },
  ]

  const menus = [
    { id: 1, link: '/createpost', name: 'Написать публикацию' },
    { id: 2, link: `userInfo/:userId`, name: 'Избранные' },
    { id: 3, link: '/logout', name: 'Выйти' },


  ]

  // solution
  const menuRef = useRef()
  const imgRef = useRef()

  const onWindowClick = (e) => {
    const isClosest = e.target.closest(`.${imgRef.current.className}`)
    if (!isClosest) {
      setOpenSel(false)
    }
  }
  useEffect(() => {
    window.addEventListener('click', onWindowClick)
    return () => {
      window.removeEventListener('click', onWindowClick)
    }

  }, [])

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

        <div className={cls.relative}>
          {
            userData && userData.id
              ?
              <button
                ref={imgRef}
                className={cls.btnImage}
                onClick={() => setOpenSel(!openSel)}
              >
                <img className={cls.userPhoto}
                  src={userData?.image}
                  alt='userDataname'

                />
              </button>
              :
              <button className={cls.entButton} onClick={handleOpen}>Войти</button>
          }
        </div>
        {
          openSel &&
          <div
            ref={menuRef}
            className={cls.selectBox}>
            <ul className={cls.selectList}>
              {
                menus.map((el) => (
                  <li
                    onClick={() => setOpenSel(false)}
                    className={cls.option} key={el.id}>
                    <Link to={el.link}>
                      {el.name}
                    </Link>
                  </li>
                ))
              }

            </ul>
          </div>
        }
      </header>
    </div>
  </div>
}


