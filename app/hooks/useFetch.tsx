"use client"

import { useState, useEffect } from "react"; 

type ApiResponse = {
  data: any,
  isLoading: boolean,
  error: string
}
export default function useFetch (endpoint: string): ApiResponse {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
        const axios = (await import("axios")).default;
        await axios.get(`http://localhost:8000/api/${endpoint}`)
        .then((response:any) => {
            console.log("success", response)
            setData(response.data)
            setIsLoading(false);
          })
        .catch((error:any) => {
          setError(`${error} no available books to book`);
          setIsLoading(false);
        })
    };
    fetchData();
  }, [endpoint]);
  return { data, isLoading, error };
};