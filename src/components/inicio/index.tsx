import "./styles.scss";

// function Inicio({right}) {
function Inicio() {
    return (
        // <section className="inicio" id="inicio" style={{ marginLeft: `-${right}rem`}}>
        <section className="inicio" id="inicio">
            <p className="inicio__apresentation">Serviço especializado em Ar Condicionados e aquecedores</p>
            <div className="inicio__buttons">
                <a className="inicio__apresentation__buttons__porque-a-gente" href="#nosso-servico">Por que Marcon?</a>
                <a className="inicio__apresentation__buttons__contato" href="#contato">Nosso contato</a>
            </div>
        </section>
    );
}

export default Inicio;