"use client"
import Image from "next/image";
import Link from "next/link";

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
  date_of_release: string;
}
type BookProps = {
  book: BookData;
}

export default function Book({book}: BookProps) {
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
      <button className="bg-primary hover:brightness-125 text-white border-[3px] brder-primary text-sm font-bold py-2 px-4 rounded">Book it</button>
      {/* Include this if you want to navigate to a detailed view */}
      <Link href={`/books/${book.id}`} prefetch={false} className="bg-white hover:bg-[#fff7f7] text-primary border-[3px] brder-primary text-sm font-bold py-2 px-4 rounded">
        Open
      </Link>
      </div>
    </div>
  </li>
  )
}
