import "./styles.scss";
import logo from "../../assets/logo.png";
import { Menu } from "@mui/icons-material";
import { motion } from "framer-motion";


function Navbar() {
   
    return (
        <div className="navbar" > 
            <motion.img className="navbar__logo" src={logo} whileHover={{ scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }}/>
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