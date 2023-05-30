import { useState } from "react";
import "./styles.scss";

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
                <form>
                    <input placeholder="Digite o seu nome..." value={nome} onChange={e => setNome(e.target.value)}/>
                    <input placeholder="Digite o seu e-mail..." value={email} onChange={e => setEmail(e.target.value)}/>
                    <textarea placeholder="Escreva aqui..." value={corpo} onChange={e => setCorpo(e.target.value)}></textarea>
                    <button onClick={handleSendEmail}>Enviar</button>
                </form>
            </div>
            <div className="contato__avaliacao">
                
            </div>
        </section>
    );
}

export default Contato;