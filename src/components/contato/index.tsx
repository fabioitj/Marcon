import { useState } from "react";
import "./styles.scss";

function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [corpo, setCorpo] = useState("");

    return (
        <section className="contato" id="contato">
            <div className="contato__box">
                <form>
                    <input placeholder="Digite o seu nome..."/>
                    <input placeholder="Digite o seu e-mail..."/>
                    <textarea placeholder="Escreva aqui...">

                    </textarea>
                </form>
            </div>
            <div className="contato__avaliacao">

            </div>
        </section>
    );
}

export default Contato;