import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '/img/eu.jpeg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas Araujo" />
      <p className="title">Front-end Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar