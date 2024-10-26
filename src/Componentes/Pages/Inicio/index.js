import Titulo from "../../Titulo";
import Cards from "./Cards";
import styles from "./Inicio.module.css";

const Inicio = () => {
    return (
        <section>
        <Titulo/>

        <div className={styles.botoes__filiais}>
            <Cards url="./Matriz" filial="_gyn"/>
            <Cards url="./SaoPaulo" filial ="_sp"/>
        </div>

        </section>

    )
}

export default Inicio;