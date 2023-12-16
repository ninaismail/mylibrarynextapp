"use client"

import { useSearchParams } from "next/navigation";
import Book from "./Book";
import Filter from "./Filter";
import useFilterLocation from "../hooks/useFilterLocation";
import useSearch from "../hooks/useSearch";

const BookList = () => {
  //const { data, isLoading, error } = useFetch("books")
  const params =  useSearchParams()
  const origin = params.get("origin") as string
  const search = params.get("search") as string
  
  const {data,isLoading,error} = useFilterLocation(origin)
  data.value = useSearch(search)
  console.log("11",data)

  return (
    <>
      <Filter />
      <ul className='w-full flex justify-center items-center flex-wrap gap-5 list-none my-[30px]'>
      {isLoading && <>Loading...</>}
      {data && <>
      {Array.isArray(data)&&data.map((item, i) => (
        <Book key={i} book={item} />
      ))}
      </>}
      <p className="text-red-700">{error && error}</p>
      </ul>
    </>
  )
}
export default BookList;
