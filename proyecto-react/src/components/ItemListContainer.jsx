const ItemListContainer = ({ texto }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <div className="alert alert-danger" role="alert">
                        <h1 classNameName="text-center" style={{ color: "black", padding: "20px", textTransform: "uppercase" }}>{texto}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer