import {wordApi} from "../../services/wordApi"
import { useState, useEffect } from "react";

export const useRandomWord = () => {
    const [word, setWord] = useState("");

    useEffect(() => {
        wordApi
            .get("/randomword")
            .then((response) => {
                setWord(response.data.word);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return word;
};