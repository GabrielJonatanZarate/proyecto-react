const Footer = () => {
    return (
        <div classNameName="container-fluid text-white bg-black py-3">
            <div classNameName="row">
                <div classNameName="col">
                    <p>© 2023 Southbay S.R.L. Todos los derechos reservados.</p>
                </div>
                <div classNameName="col">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link text-black"  href="#">Hot Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Terminos y Condiciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Politica de privacidad y cookies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer