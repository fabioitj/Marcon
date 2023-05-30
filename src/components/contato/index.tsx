import { useState } from "react";
import "./styles.scss";
import {Star} from "@mui/icons-material";
import avaliacao_image from "../../assets/pessoa_avaliacao.png"

function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [corpo, setCorpo] = useState("");

    const clearFields = () => {
        setNome("");
        setEmail("");
        setCorpo("");
    }

    const handleSendEmail = () => {

        clearFields();
        alert("E-mail enviado com sucesso!");
    }

    return (
        <section className="contato" id="contato">
            <div className="contato__box">
                <h2>Entre em contato</h2>
                <form>
                    <input placeholder="Digite o seu nome..." value={nome} onChange={e => setNome(e.target.value)}/>
                    <input placeholder="Digite o seu e-mail..." value={email} onChange={e => setEmail(e.target.value)}/>
                    <textarea placeholder="Escreva aqui..." value={corpo} onChange={e => setCorpo(e.target.value)}></textarea>
                    <button onClick={handleSendEmail}>Enviar</button>
                </form>
            </div>
            <div className="contato__avaliacao">
                <h2>Avaliações</h2>
                <div className="contato__avaliacao__box">
                    <img src={avaliacao_image}/>
                    <div className="contato__avaliacao__box__stars">
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                    <p><i>"Empresa excelente, instalação de ar-condicionado com uma qualidade absurda, ótimo atendimento do orçamento até a finalização. Perfeito!"</i></p>
                </div>
            </div>
        </section>
    );
}

export default Contato;