export default async function BooksData(){
    const url = "http://localhost:3000/books/api/books"
    const fetchData = await fetch(url)
    console.log()
    const res =await fetchData.json()
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl text-green-700 font-bold">API Class</h1>
            <p className="text-lg underline">Hi, {res.name}</p>
        </div>
    )
}