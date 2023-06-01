import "./styles.scss";
import { GppGood, ThumbUpAlt, Bookmark } from '@mui/icons-material';

function NossoServicoCard({ title, description, reverse, Icon }: { title: string, description: string, reverse: boolean, Icon: any }) {
    return (
        <div className={"nosso-servico__box__card " + (reverse ? "nosso-servico__box__card-reverse" : "")}>
            {Icon}
            <div className="nosso-servico__box__card__text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

function NossoServico() {
    const cards = [
        {
            title: 'Segurança',
            description: 'Provemos toda segurança necessária para nossos serviços, utilizando equipamentos e ferramentas apropriados para o trabalho.',
            Icon: <GppGood />
        },
        {
            title: 'Qualidade',
            description: 'Entregamos sempre o serviço que um cliente nosso pode receber.',
            Icon: <ThumbUpAlt />
        },
        {
            title: 'Feedback',
            description: 'Somos os preferidos da região, sendo os melhores avaliados na Google, não vemos a hora de atender você!',
            Icon: <Bookmark />
        },
    ]

    return (
        <section className="nosso-servico" id="nosso-servico">
            <div className="nosso-servico__box">
                {
                    cards && cards.map(({ title, description, Icon }, index) => <NossoServicoCard title={title} description={description} Icon={Icon} reverse={index % 2 == 0} key={index} />)
                }
            </div>
            <div></div>
        </section>
    )
}

export default NossoServico;