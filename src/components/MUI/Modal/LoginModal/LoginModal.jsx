import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import request from '../../../../services/httpRequest';
import { useState } from 'react';
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

export default function LoginModal({ open, handleClose, }) {


    const [userNameRegister, setUserNameRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        request.post('/register', {
            username: userNameRegister,
            password: passwordRegister
        }).then((res) => {
            console.log(res);
        })
    }
    return (
        <div>
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
                            Придумай пароль для входа
                        </Typography>
                        <input
                            {...register('username', { required: true })}
                            // onChange={(e) => {
                            //     setUserNameRegister(e.target.value)
                            // }}
                            className={styles.inp}
                            type='text'
                            placeholder='name '
                        />
                        <input
                            {...register('username', { required: true })}
                            // onChange={(e) => {
                            //     setPasswordRegister(e.target.value)
                            // }}
                            className={styles.inp}
                            type='password'
                            placeholder='password'
                        />
                        <button onClick={handleSubmit(onSubmit)} type='submit' className={styles.login}>Войти</button>
                    </Box>
                </form>
            </Modal>
        </div >
    );
}

