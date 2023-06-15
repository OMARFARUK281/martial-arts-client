import { useQuery } from "@tanstack/react-query";
import useAuth from "./uesAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
        const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['asAdmin', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin;