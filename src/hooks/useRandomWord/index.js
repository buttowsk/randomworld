import {wordApi} from "../../services/wordApi"
import { useState, useEffect } from "react";

export const useRandomWord = () => {
    const [word, setWord] = useState("");
    const [isLoadingWord, setIsLoadingWord] = useState(false);

    useEffect(() => {
        setIsLoadingWord(true);
        wordApi.get("/api?words=1")
            .then(response => {
                setWord(response.data[0]);
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setIsLoadingWord(false);
            })
    }, []);

    return {word, isLoadingWord};
}