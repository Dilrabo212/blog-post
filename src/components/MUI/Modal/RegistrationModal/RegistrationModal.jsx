import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import { Avatar } from '@mui/material';
import user1 from '../../../../image/Ellipse 158.png';
import user2 from '../../../../image/user2.png';
import user3 from '../../../../image/user3.png';
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

export default function RegistrationModal({ open, handleClose, onLoginClik }) {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography className={styles.title} variant="h4" component="h2">
                        Как вас зовут?
                    </Typography>
                    <input
                        className={styles.inp}
                        type='text'
                        placeholder='Введите имя' />
                    <Typography sx={{ mb: '16px' }} className={styles.title} variant="h6" component="h2">
                        Выберите аватар
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '8px', mb: '47px' }}>
                        <Avatar alt="Remy Sharp" src={user1} />
                        <Avatar alt="Remy Sharp" src={user2} />
                        <Avatar alt="Remy Sharp" src={user3} />
                        <Avatar alt="Remy Sharp" src="/images/user3.png" />
                    </Box>
                    <button onClick={onLoginClik} className={styles.login}>Войти </button>
                </Box>
            </Modal>
        </div >
    );
}

