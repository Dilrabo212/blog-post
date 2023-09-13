import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import { Avatar } from '@mui/material';
import user1 from '../../../../image/Ellipse 158.png';
import user2 from '../../../../image/user2.png';
import user3 from '../../../../image/user3.png';
import RegistrationModal from '../SignInModal/SigninModal';
import { Link } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '546px',
    bgcolor: 'background.paper',
    border: 'none',
    p: '60px',
    borderRadius: '8px',
};

export default function EnterModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className={styles.btn} onClick={handleOpen}>Войти</Button>
            <Modal
                className={styles.modal}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography className={styles.title} id="modal-modal-title" variant="h4" component="h2">
                        Вход на udevs news
                    </Typography>
                    <input className={styles.inp} type='text' placeholder='Email' />
                    <input className={styles.inp} type='text' placeholder='Пароль' />
                    <Link to={'/home'}><Button className={styles.login}>Войти</Button></Link>
                    <Typography className={styles.questionText} id="modal-modal-text" variant="p" component="p">
                        У вас ещё нет аккаунта?
                        <Button className={styles.question}><RegistrationModal /></Button>
                    </Typography>
                </Box>
            </Modal>
        </div >
    );
}

