import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';

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

export default function LoginModal({ open, handleClose, }) {
    return (
        <div>
            <Modal
                className={styles.modal}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography className={styles.title} id="modal-modal-title" variant="h4" component="h2">
                        Придумай пароль для входа
                    </Typography>
                    <input className={styles.inp} type='text' placeholder='Придумайте пароль' />
                    <input className={styles.inp} type='text' placeholder='Подтвердите пароль' />
                    <Button onClick={handleClose} className={styles.login} >Войти</Button>
                </Box>
            </Modal>
        </div >
    );
}

