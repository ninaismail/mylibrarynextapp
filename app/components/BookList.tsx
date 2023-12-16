"use client"

import { useSearchParams } from "next/navigation";
import Book from "./Book";
import Filter from "./Filter";
import useFilterLocation from "../hooks/useFilterLocation";
import useSearch from "../hooks/useSearch";
import useFetch from "../hooks/useFetch";

const BookList = () => {
  const { data:unfilteredData, isLoading, error } = useFetch("books")
  
  const params =  useSearchParams()
  const origin = params.get("origin") as string
  const search = params.get("search") as string
  
  const {data:locationData} = useFilterLocation(origin,unfilteredData)
  const {data:searchData} = useSearch(search,unfilteredData)
  
  const data = (locationData && locationData.length > 0)
  ? locationData
  : (searchData && searchData.length > 0)
  ? searchData
  : (unfilteredData && unfilteredData.length > 0)
  ? unfilteredData
  : [];
  
  console.log(1,locationData)
  console.log(2,searchData)
  console.log(3,data)

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
