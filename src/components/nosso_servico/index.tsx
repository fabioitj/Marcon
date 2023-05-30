import "./styles.scss";
import {GppGood, ThumbUpAlt, Bookmark} from '@mui/icons-material';

function NossoServicoCard({title, description, Icon}: {title: string, description: string, Icon: any}) {
    return (
        <div className="nosso-servico__card">
            {Icon}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

function NossoServico() {
    const cards = [
        {
            title: 'Segurança',
            description: 'Lorem Ipsum is Lorem Ipsum in a Vestibulum in the First Order Edition of Lorem Ipsum in the First Order Edition of Lorem Ipsum in the',
            Icon: <GppGood/>
        },
        {
            title: 'Qualidade',
            description: 'Lorem Ipsum is Lorem Ipsum in a Vestibulum in the First Order Edition of Lorem Ipsum in the First Order Edition of Lorem Ipsum in the',
            Icon: <ThumbUpAlt/>
        },
        {
            title: 'Feedback',
            description: 'Lorem Ipsum is Lorem Ipsum in a Vestibulum in the First Order Edition of Lorem Ipsum in the First Order Edition of Lorem Ipsum in the',
            Icon: <Bookmark/>
        },
    ]

    return (
        <section className="nosso-servico" id="nosso-servico">
            {
                cards && cards.map(({title, description, Icon}, index) => <NossoServicoCard title={title} description={description} Icon={Icon} key={index}/>)
            }
        </section>
    )
}

export default NossoServico;