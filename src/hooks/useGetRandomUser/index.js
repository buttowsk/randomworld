import {useEffect, useState} from "react";
import {randomuserApi} from "../../services/randomuserApi";

export const useGetRandomUser = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await randomuserApi.get("/api?results=10");
            // eslint-disable-next-line array-callback-return
            response.data.results.map((user) => {
                setUser(prevState => [...prevState, {photo: user.picture.medium, username: user.login.username}]);
            })
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return ({
        user,
        error
    })
}