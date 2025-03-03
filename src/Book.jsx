const Book = ({title, author}) =>{
    return (
        <section className="text-center">
             <h1 className='text-orange-500 text-3xl font-bold'>Favorite Books</h1>
             
            <h2 className="text-2xl font-bold">{title}</h2>
            <h2 className="px-4 text-red-400 font-bold"> by {author}</h2>
        </section>
    )
}

export default Book;