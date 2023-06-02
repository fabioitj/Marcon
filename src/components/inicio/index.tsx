import "./styles.scss";
import { WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion";
import coolGuy from "../../assets/cool-guy.png";

// function Inicio({right}) {
function Inicio() {
    return (
        // <section className="inicio" id="inicio" style={{ marginLeft: `-${right}rem`}}>
        <section className="inicio" id="inicio">
            <div className="inicio__left">
                <motion.p className="inicio__left__apresentation" initial={{ opacity: 0, x: -200}} whileInView={{ opacity: 1, x: 0}} transition={{ ease: 'linear' }}>Serviço especializado em <br/><span>Ar condicionados e aquecedores</span></motion.p>
                <div className="inicio__left__buttons">
                    <motion.a className="inicio__left__buttons__porque-a-gente" href="#nosso-servico" whileHover={{scale: 1.2}} transition={{ type: 'spring', stiffness: 300}}>Por que Marcon?</motion.a>
                    <motion.a className="inicio__left__buttons__zap" href="https://wa.me/5547992476252" target="_blank" whileHover={{scale: 1.2}} transition={{ type: 'spring', stiffness: 300}}><WhatsApp/> Mande uma mensagem</motion.a>
                </div>
            </div>
        </section>
    );
}

export default Inicio;