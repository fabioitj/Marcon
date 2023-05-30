import { AccessTime, Email, Phone } from "@mui/icons-material";
import "./styles.scss";

function Footer() {
    return (
        <footer className="footer">
            <span style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}><AccessTime/>Horário de trabalho: 8:00 - 19:00</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}><Phone/>(47) 99247-6252</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}><Email/>loremipsum@gmail.com</span>
        </footer>
    )
}

export default Footer;