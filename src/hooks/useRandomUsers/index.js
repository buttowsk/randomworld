import {useEffect, useState} from "react";
import {randomuserApi} from "../../services/randomuserApi";

export const useRandomUsers = (totalComments) => {
    const [users, setUsers] = useState([]);
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);

    useEffect(() => {
        setIsLoadingUsers(true);
        randomuserApi.get(`/api?results=${totalComments}`)
            .then(response => {
                setUsers(response.data.results)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setIsLoadingUsers(false);
            })
    }, [totalComments])
    return {users, isLoadingUsers}
}