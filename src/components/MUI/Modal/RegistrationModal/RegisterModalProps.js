
import { useForm } from 'react-hook-form';
import { useGetAvatars } from './LoginModal.service';

export const RegisterModalProps = ({ onLoginClik }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem("userData", JSON.stringify(data))
        onLoginClik()
    }
    const getAvatars = useGetAvatars()
    return {
        register,
        handleSubmit,
        avatars: getAvatars.data,
        onSubmit
    }
}
