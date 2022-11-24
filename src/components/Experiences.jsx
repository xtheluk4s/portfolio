import '../styles/components/experiences.sass'

const experiences = [
    {id: 1, name: "PBtec - Soluções em Automação Comercial", function: "Suporte Help Desk (Estágio)", description:"Auxiliar em atividades de infraestrutura de TI, mantendo a disponibilidade dos sistemas e atendendo às políticas de segurança da empresa. Presta suporte realizando instalação e configuração de sistemas de automação comercial, redes e equipamentos.",  period: "Agosto 2022 - o momento"}
]

const Experiences = () => {
  return (
    <section className="experiences-container">
        <h2>Experiências</h2>
        <div className="experiences-grid">
            {experiences.map((exp) => (
                <div className="experiences-card" id={exp.id} key={exp.id}>
                    <div className="experiences-info">
                        <h3>{exp.name}</h3>
                        <h4>{exp.function}</h4>
                        <p>{exp.description}</p>
                        <p>{exp.period}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Experiences