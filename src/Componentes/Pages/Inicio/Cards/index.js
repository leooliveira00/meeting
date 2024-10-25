import styles from './Cards.module.css'
import { Link } from 'react-router-dom'; 

const Cards = ({url, filial}) => {
    return (
        <div className={styles.filial}>
            <Link to={url}>
                <img src={`/img/scitech${filial}.png`}/>
            </Link>     
        </div>
    )
}

export default Cards;