import {dummyJsonApi} from "../../services/dummyJsonApi";
import {useEffect, useState} from "react";

export const useGetRandomComment = (totalComments) => {
    const [comment, setComment] = useState([]);
    const [isLoadingComment, setIsLoadingComment] = useState(false);

    useEffect(() => {
        setIsLoadingComment(true);
        dummyJsonApi.get(`/comments?limit=${totalComments}`)
            .then(response => {
                setComment(response.data.comments);
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setIsLoadingComment(false);
            })

    }, [totalComments]);

    return {comment, isLoadingComment};
}