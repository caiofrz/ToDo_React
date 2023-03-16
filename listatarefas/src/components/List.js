const List = () => {
    const items = [
        {
            id: 1,
            name: "caio",
        },
        {
            id: 2,
            name: "Caio",
        },
        {
            id: 3,
            name: "Ferraz",
        },
    ];

    return(
        <div>
            {items.map((item) => (
            <p>
                {item.id} - {item.name}
            </p>
            ))
            }
        </div>
    )
}

export default List;