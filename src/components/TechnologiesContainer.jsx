import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", description: "HTML Semântico / Forms", icon: <DiHtml5/> },
    { id: "css", name: "CSS3", description: "Classes / Herança / Responsividade", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", description: "DOM / Manipulação de dados / Importação de arquivos", icon: <DiJsBadge /> },
    { id: "react", name: "React", description: "Components / Hooks / Rotas", icon: <DiReact /> }
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer