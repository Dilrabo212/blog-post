import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import { Avatar } from '@mui/material';
import { RegisterModalProps } from './RegisterModalProps';
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

    const props = {
        onLoginClik
    }
    const {
        register,
        handleSubmit,
        avatars,
        onSubmit
    } = RegisterModalProps(props)



    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component={'form'} onSubmit={handleSubmit(onSubmit)}>
                    <Typography className={styles.title} variant="h4" component="h2">
                        Как вас зовут?
                    </Typography>
                    <input
                        className={styles.inp}
                        type='text'
                        placeholder='Введите имя'
                        {...register('name', { required: true })}
                    />
                    <Typography sx={{ mb: '16px' }} className={styles.title} variant="h6" component="h2">
                        Выберите аватар
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '8px', mb: '47px' }}>
                        {
                            avatars?.map(avatar => (
                                <label key={avatar?.id}>
                                    <input
                                        className={styles.avatarInput}
                                        type='radio'
                                        name='avatar'
                                        value={avatar?.url}
                                        {...register('avatar', { required: true })}
                                    />
                                    <span className={styles.avatarWrapper}>
                                        <Avatar alt="img" src={avatar?.url} />
                                    </span>
                                </label>
                            ))
                        }

                    </Box>
                    <button type='submit' className={styles.login}>Войти </button>
                </Box>
            </Modal>
        </div >
    );
}

