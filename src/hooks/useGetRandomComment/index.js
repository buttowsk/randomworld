import {dummyJsonApi} from "../../services/dummyJsonApi";
import {useEffect, useState} from "react";

export const useGetRandomComment = () => {
    const [comment, setComment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchComment = async () => {
        try {
            setLoading(true);
            const response = await dummyJsonApi.get(`/comments?limit=${340}`);
            // eslint-disable-next-line array-callback-return
            response.data.comments.map((comment) => {
                setComment(prevState => [...prevState, comment.body]);
            })
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchComment();
    }, []);

    return ({
        comment,
        loading,
        error
    })
}