import Matriz from "../Matriz";
import Cards from "./Cards";
import styles from "./Inicio.module.css";

const Inicio = () => {
    return (
        <section className={styles.titulo}>
            <h1> Meetings Rooms Scitech</h1>
            <h3>Selecione a filial:</h3>

        <div className={styles.botoes__filiais}>
            <Cards url="./Matriz" filial="_gyn"/>
            <Cards url="./SaoPaulo" filial ="_sp"/>
        </div>

        </section>

    )
}

export default Inicio;