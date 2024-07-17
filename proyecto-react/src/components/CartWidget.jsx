const CartWidget = () => {
    return (
        <div className="container text-end"> 
            <button type="button" className="btn btn-light position-relative">
                <img src="/images/bag.svg" alt="Carrito" width={24}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">8</span>
            </button>
        </div>
    )
}

export default CartWidget