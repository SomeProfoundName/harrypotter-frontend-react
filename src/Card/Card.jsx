import styles from './Card.module.css';
import VanillaTilt from 'vanilla-tilt';



function Cards(props) {

    return (
        <div key={props.index} className={styles.character} data-tilt>
            <div className={styles.characterinner}>
                <div className={styles.front}>
                    <img src={props.image} alt={props.alt}/>
                    <div className={styles.characterinfo}>
                        <h3>{props.name}</h3>
                    </div>
                </div>
                <div className={styles.back}>
                    <h3>{props.role}</h3>
                </div>
            </div>
        </div>
    )
}

export default Cards
