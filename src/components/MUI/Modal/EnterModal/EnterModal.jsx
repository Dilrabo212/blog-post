import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import request from '../../../../services/httpRequest';

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
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    return (
        <Modal
            className={styles.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form onSubmit={handleSubmit}>
                <Box sx={style}>
                    <Typography className={styles.title} id="modal-modal-title" variant="h4" component="h2">
                        Вход на udevs news
                    </Typography>
                    <input
                        onChange={handleChange}
                        className={styles.inp}
                        type="email"
                        name="email"
                        value={data.username}
                        placeholder='Email'
                    />
                    <input
                        onChange={handleChange}
                        className={styles.inp}
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder='Пароль'
                    />
                    <Button className={styles.login} type="submit">Войти</Button>
                    <Typography className={styles.questionText} id="modal-modal-text" variant="p" component="p">
                        У вас ещё нет аккаунта?
                        <Button className={styles.question} onClick={onRegisterClick}> зарегистрироваться</Button>
                    </Typography>
                </Box>
            </form>
        </Modal>
    );
}




// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import styles from './style.module.scss';
// import request from '../../../../services/httpRequest';
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '546px',
//     bgcolor: 'background.paper',
//     border: 'none',
//     p: '60px',
//     borderRadius: '8px',
// };

// export default function EnterModal({ open, handleClose, onRegisterClick, }) {

//     const [data, setData] = React.useState({
//         username: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setData({
//             ...data,
//             [e.target.name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const userData = {
//             email: data.email,
//             password: data.password
//         };
//         request.post('/login', userData).then((response) => {
//             console.log(response.status, response.data.token);
//         });
//     };


//     return (
//         <Modal
//             className={styles.modal}
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//         >
//             <form onSubmit={handleSubmit} >
//                 <Box sx={style}>
//                     <Typography className={styles.title} id="modal-modal-title" variant="h4" component="h2">
//                         Вход на udevs news
//                     </Typography>
//                     <input onChange={handleChange}
//                         // {...register('username', { required: true })}
//                         className={styles.inp}
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         placeholder='Email' />

//                     <input onChange={handleChange}
//                         // {...register('password', { required: true })}
//                         className={styles.inp}
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         placeholder='Пароль' />
//                     <Button className={styles.login}>Войти</Button>
//                     <Typography className={styles.questionText} id="modal-modal-text" variant="p" component="p">
//                         У вас ещё нет аккаунта?
//                         <Button className={styles.question} onClick={onRegisterClick}> зарегистрироваться</Button>
//                     </Typography>
//                 </Box>
//             </form>
//         </Modal>
//     );
// }

