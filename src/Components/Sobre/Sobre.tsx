import React from "react";
import styles from "./Sobre.module.css"

const Sobre: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <p className={styles.aboutText}>
                Elaborado como projeto final do Trabalho de Conclusão de Curso (TCC) de Gabriel Pereira da Costa, graduado em Sistemas
                e Mídias Digitais, e orientado pela Dra. Maria de Fátima Costa de Souza, professora do curso, este catálogo é fruto de
                uma parceria com o Horto de Plantas Medicinais Prof. Francisco José de Abreu Matos. Ele busca fornecer informações
                qualificadas e objetivas sobre plantas medicinais, capacitando o público a considerar seu uso como uma alternativa
                segura aos medicamentos industrializados.
            </p>
        </div>
    )
}

export default Sobre;