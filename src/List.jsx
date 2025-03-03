const List = () =>{

    const names = ['Anthony Pham','Alex Johnson', 'Bob Climo'];
    const renderedNames = names.map((name) =>{
        return <li>{name}</li>;
    })
    return(

        <>
        <ul className="flex px-4 gap-5">{renderedNames}</ul>
        </>
    )
}

export default List;