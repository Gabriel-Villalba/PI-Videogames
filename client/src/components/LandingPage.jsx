
import { Link } from 'react-router-dom';
import styles from '../styles/Landing.module.css'
import img from '..//img/character.png'



export function LandingPage () {
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>¡Bienvenidos al Centro de los Videojuegos!</h1>
            <div className={styles.description}>¡En esta App encontrarás una gran variedad de videojuegos!</div>
            <div className={styles.description}>Podrás filtrarlos por géneros, ordenarlos por valoraciones e incluso crear tu propio videojuego eligiendo diferentes plataformas</div>
            <h2 className={styles.subtitle}>¿Estás listo para esta aventura?</h2>
            <img src={img} alt="presentation pic"/>
            <div>
            <Link to='/home'>
                <button className={styles.buttonPlay}>PLAY</button>
            </Link>
            </div>
            <div className={styles.description}>¡Proyecto Individual!</div>
            <div className={styles.description}>Gabriel Villalba</div>
        </div>
    )
}

export default LandingPage;