import React, {useState, useEffect} from 'react'
import { server_calls } from '/Users/david/Coding-Temple/Capstone/nba-stat-ref/src/api/Server';

export const useGetData = () => {
    const [contactData, setData] = useState<[]>([]);

    async function handleDataFetch(){
        const result = await server_calls.get()
        setData(result)
    }

    useEffect( () =>{
        handleDataFetch();
    }, [])
  
    return {contactData, getData:handleDataFetch}
}
