import BookDetails from "../../components/BookDetails";

export default async function DetailsPage({ params }: { params: { id: number } }) {
  return (
    <main className="min-h-screen mx-auto text-center">
      <h1 className="text-xl text-[#B87333]">What is this book all about?</h1>
      {params.id===null && <>loading...</>}
      <BookDetails id={params.id} />
    </main>
  )
}
