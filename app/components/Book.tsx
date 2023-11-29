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
  literature_origin: string;
  date_of_release: string;
}
type BookProps = {
  book: BookData;
}

export default function Book({book}: BookProps) {
  return (
  <Link href={`/books/${book.id}`} prefetch={false} key={book.id} className="w-64 h-full bg-white shadow-lg rounded-lg p-4 ease duration-300 hover:scale-105">
    <div className="relative aspect-[3/4] rounded-t-lg">
        <Image
        src={book.cover_image}
        alt={book.title}
        fill
    /></div>
    <div className="text-zillaslab mt-4 flex flex-col justify-between space-y-[4px] min-h-[174px]">
      <h2 className="text-xl font-[500]">{book.title}</h2>
      <span className="font-[500]">{book.author}</span>
      <p className="text-sm min-h-[40px] font-[300]">{book.brief}</p>
      <div className="flex items-center justify-between">
        <span className="text-green-500 font-[500]">${book.deposit}</span>
        <button className="bg-primary hover:brightness-125 text-white border brder-primary text-sm font-[700] py-2 px-4 rounded">Book it</button>
      </div>
    </div>
  </Link>
  )
}
