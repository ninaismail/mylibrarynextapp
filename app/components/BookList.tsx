"use client"
import useFetch from "../hooks/useFetch";
import Book from "./Book";
type BookProps = {
    id: string;
    title: string;
    author: string;
    brief: string;
    description: string;
    cover_image: string;
    images: string[];
    deposit: number;
    is_available: Boolean;
    date_of_release: string;
}
const BookList = () => {
  const { data, isLoading, error } = useFetch("books")
  return (
    <ul className='w-full flex justify-center items-center flex-wrap gap-4 list-none'>
      {isLoading && <>Loading...</>}
      {data && <>
      {Array.isArray(data)&&data.map((item:BookProps, i:number) => (
        <Book key={i} book={item} />
      ))}
      </>}
      <p className="text-red-700">{error && error}</p>
    </ul>
  )
}
export default BookList;
