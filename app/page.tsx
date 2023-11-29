import BannerDesign from "./components/BannerDesign";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto text-center">
    <BannerDesign />
    <BookList/>
    </main>
  )
}
