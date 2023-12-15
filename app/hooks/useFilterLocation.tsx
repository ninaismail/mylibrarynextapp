"use client"
import useFetch from "./useFetch"
type BookData = {
    id: string;
    title: string;
    author: string;
    brief: string;
    description: string;
    cover_image: string;
    images: string[];
    deposit: number;
    is_available: Boolean;
    literature_origin: string;
    date_of_release: string;
  }
export default function useFilterLocation (item:string) {
    const { data,isLoading,error } = useFetch("books")
    const result = data.filter((data:BookData) => data.literature_origin === item);
    console.log(result)
    return item ?  {data:result}  : {data,isLoading,error};
};