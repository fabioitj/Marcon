import "./styles.scss";
import { GppGood, ThumbUpAlt, Bookmark } from '@mui/icons-material';
import { motion } from "framer-motion";

function NossoServicoCard({ title, description, Icon }: { title: string, description: string, reverse: boolean, Icon: any }) {
    return (
        <motion.div className="nosso-servico__box__card" initial={{ opacity: 0, marginLeft: -500 }} whileInView={{ opacity: 1, marginLeft: 0 }} transition={{ duration: 0.5 }}>
            {Icon}
            <div className="nosso-servico__box__card__text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </motion.div>
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
        </section>
    )
}

export default NossoServico;