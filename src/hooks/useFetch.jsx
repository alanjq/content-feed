"use client"

import { useEffect, useState } from "react";

const organizeRecord = ({ id, imageUri, comments, metadata, textData }) => {
    let newRecord = {
        id,
        image: imageUri,
        ...metadata,
        ...textData,
        ...comments,
        author: `${textData.author.first} ${textData.author.last}`,
    }
    return newRecord
}


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetch(url).then(r => r.json());
                const newObject = !Array.isArray(result.contentCards) ? [] : result.contentCards.map(organizeRecord)
                console.log('result', newObject);
                setData(newObject);
            } catch (error) {
                setIsError(true);
                setData(null)
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return ({ data, isLoading, isError });
};

export default useFetch
