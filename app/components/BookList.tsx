"use client"
import useFetch from "../hooks/useFetch";
import Book from "./Book";

const BookList = () => {
  const { data, isLoading, error } = useFetch("books")
  return (
    <ul className='w-full flex justify-center items-center flex-wrap gap-4 list-none'>
      {isLoading && <>Loading...</>}
      {data && <>
      {Array.isArray(data)&&data.map((item, i) => (
        <Book key={i} book={item} />
      ))}
      </>}
      <p className="text-red-700">{error && error}</p>
    </ul>
  )
}
export default BookList;
