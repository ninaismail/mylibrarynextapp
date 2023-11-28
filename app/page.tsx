import BookList from "./components/BookList";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto text-center">
    <h1 className="text-xl text-[#B87333]">Check out these available books!</h1>
      <p>book your fave before it&apos;s too late</p>
      <BookList/>
    </main>
  )
}
