import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div classNameNameName="container my-5">
            <div classNameNameName="row">
                <div classNameNameName="col">
                    <img src="images/logo.svg" alt="Nike" width={60} />
                </div>
                <div classNameName="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Futbol</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Hombre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Mujer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Niño/a</a>
                        </li>
                    </ul>
                </div>
                <div classNameName="col">
                    <CartWidget />
                </div>

            </div>

        </div>
    )
}

export default NavBar