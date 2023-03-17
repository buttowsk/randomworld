import {wordApi} from "../../services/wordApi"
import { useState, useEffect } from "react";
import axios from "axios";

export const useRandomWord = () => {
    const [word, setWord] = useState("");
    const [error, setError] = useState(null);

    const fetchWord = async () => {
        try {
            const response = await axios.get(`https://random-word-api.vercel.app/api?words=1`);
            setWord(response.data[0]);
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        fetchWord();
    }, []);

    return ({
        word,
        error
    })
}