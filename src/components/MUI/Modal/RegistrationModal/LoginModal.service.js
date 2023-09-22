import { useQuery } from 'react-query';
import request from '../../../../services/httpRequest';

const modalService = {
    getAvatars: () => request.get("/avatars").then(data => data)

}
export const useGetAvatars = () => {
    return useQuery(["GET-AVATARS"], modalService.getAvatars)
}  
