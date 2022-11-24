import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjectsContainer from './ProjectsContainer'
import Experiences from './Experiences'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <Experiences />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent