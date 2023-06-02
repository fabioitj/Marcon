import "./styles.scss";
import logo from "../../assets/logo.png";
import { Menu } from "@mui/icons-material";
import { useEffect } from "react";

function Navbar() {
    useEffect(() => {
        window.addEventListener("click", (e) => {
            const checkbox = document.getElementById("navbar__checkbox") as HTMLInputElement;  
            const main = document.getElementById("main");

            if(main.)
        });
    }, []);

    return (
        <div className="navbar" > 
            <img className="navbar__logo" src={logo}/>
            <input className="navbar__checkbox" type="checkbox" id="navbar__checkbox"/>
            <label htmlFor="navbar__checkbox">
                <Menu/>
            </label>
            <ul className="navbar__list">
                <li className="navbar__list__item"><a className="navbar__list__item__link" href="#inicio">Início</a></li>
                <li className="navbar__list__item"><a className="navbar__list__item__link" href="#nosso-servico">Nosso serviço</a></li>
                <li className="navbar__list__item"><a className="navbar__list__item__link" href="#contato">Contato</a></li>
            </ul>
        </div>
    );
}

export default Navbar;