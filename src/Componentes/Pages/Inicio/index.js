import styles from "./Inicio.module.css";

const Inicio = () => {
    return (
        <section className={styles.titulo}>
            <h1> Meetings Rooms Scitech</h1>
            <h3>Selecione a filial:</h3>

        <div className={styles.botoes__filiais}>
            <a>Filial a</a>
            <a>Filial b</a>
        </div>

        </section>

    )
}

export default Inicio;