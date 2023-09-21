import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import request from '../../../../services/httpRequest';
import { useForm } from 'react-hook-form';
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

export default function EnterModal({ open, handleClose, onRegisterClick }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        request.post('/login', data)
            .then(data => {
                localStorage.setItem(
                    "userData", JSON.stringify(data.user)
                )
            })
    }
    return (
        <Modal
            className={styles.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form onSubmit={handleSubmit(onSubmit)} >
                <Box sx={style}>
                    <Typography className={styles.title} variant="h4" component="h2">
                        Вход на udevs news
                    </Typography>
                    <input
                        {...register('username', { required: true })}
                        className={styles.inp}
                        type="text"
                        placeholder='Email' />

                    <input
                        {...register('password', { required: true })}
                        className={styles.inp}
                        type="password"
                        name="password"
                        placeholder='Пароль' />
                    <button type='submit' className={styles.login}>Войти</button>
                    <Typography className={styles.questionText} variant="p" component="p">
                        У вас ещё нет аккаунта?
                        <Button className={styles.question} onClick={onRegisterClick}> зарегистрироваться</Button>
                    </Typography>
                </Box>
            </form>
        </Modal>
    );
}

