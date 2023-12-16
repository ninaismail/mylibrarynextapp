"use client"

import { useMemo } from "react";
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
export default function useSearch(item:string,data:any) {
    const result:BookData[] = useMemo(() => {
      return data.filter((dataitem:BookData) => {
        return dataitem.title.toLowerCase().includes(item?.toLowerCase())
      })
    }, [data, item])
    console.log(result)
    return {data:result};
};