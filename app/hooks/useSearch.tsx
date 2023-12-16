"use client"
import { useMemo } from "react";
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
type BookProps = {
  book: BookData;
}
export default function useSearch(item:string) {
    const { data,isLoading,error } = useFetch("books")
    const result:BookProps = useMemo(() => {
      return data.filter((dataitem:BookData) => {
        return dataitem.title.toLowerCase().includes(item?.toLowerCase())
      })
    }, [data, item])
    console.log(result)
    return item ?  {data:result}  : {data,isLoading,error};
};