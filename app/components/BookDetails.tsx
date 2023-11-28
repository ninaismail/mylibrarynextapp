"use client"
import Image from "next/image";
import useFetch from "../hooks/useFetch";
type BookDetailsProps = {
  id: number;
};
export default function BookDetails({ id }: BookDetailsProps) {
  const { data:book, isLoading, error } = useFetch(`books/${id}`)

  return (
    <main className="w-80 mx-auto">
      {isLoading && <>Loading...</>}
      {book && <><div className="relative aspect-[3/4] object-cover rounded-t-lg">
        <Image
          src={book.cover_image}
          alt={book.title}
          fill
        /></div>
        <div className="mt-4 space-y-2">
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <span className="font-semibold">{book.author}</span>
          <p className="text-sm min-h-[40px]">{book.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-green-500 font-semibold">${book.deposit}</span>
            <button className="bg-primary hover:brightness-125 text-white border brder-primary text-sm font-bold py-2 px-4 rounded">Book it</button>
          </div>
      </div></>}
      <p className="text-red-700">{error && error}</p>      
    </main>
  )
}
