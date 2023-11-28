"use client"
import Image from "next/image";

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
type Book = {
  book: BookProps;
}

export default function Book({book}: Book) {
  return (
  <li key={book.id} className="w-64 h-full bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
      <div className="relative aspect-[3/4] object-cover rounded-t-lg">
        <Image
        src={book.cover_image}
        alt={book.title}
        fill
    /></div>
    <div className="mt-4 space-y-2">
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <span className="font-semibold">{book.author}</span>
      <p className="text-sm min-h-[40px]">{book.brief}</p>
      <div className="flex items-center justify-between">
      <span className="text-green-500 font-semibold">${book.deposit}</span>
      <button className="bg-[#E97451] hover:brightness-125 text-white text-sm font-bold py-2 px-4 rounded">Book it</button>
      {/* Include this if you want to navigate to a detailed view */}
      {/* <Link to={`${id}`} className="bg-brown-500 hover:bg-brown-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 transition">
      View Product
      </Link> */}
      </div>
    </div>
  </li>
  )
}
