import "./styles.scss";
import { WhatsApp } from "@mui/icons-material";

// function Inicio({right}) {
function Inicio() {
    return (
        // <section className="inicio" id="inicio" style={{ marginLeft: `-${right}rem`}}>
        <section className="inicio" id="inicio">
            <p className="inicio__apresentation">Serviço especializado em <br/>Ar Condicionados e aquecedores</p>
            <div className="inicio__buttons">
                <a className="inicio__buttons__porque-a-gente" href="#nosso-servico">Por que Marcon?</a>
                <a className="inicio__buttons__zap" href="https://wa.me/5547992476252" target="_blank"><WhatsApp/> Mande uma mensagem</a>
            </div>
        </section>
    );
}

export default Inicio;