import "./styles.scss";
import logo from "../../assets/logo.png";

function Navbar() {
    return (
        <div className="navbar" > 
            <img className="navbar__logo" src={logo}/>
            <ul className="navbar__list">
                <li className="navbar__list__item"><a className="navbar__list__item__link" href="#inicio">Início</a></li>
                <li className="navbar__list__item"><a className="navbar__list__item__link" href="#nosso-servico">Nosso serviço</a></li>
                <li className="navbar__list__item"><a className="navbar__list__item__link" href="#contato">Contato</a></li>
            </ul>
        </div>
    );
}

export default Navbar;