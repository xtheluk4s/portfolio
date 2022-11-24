import {FaLinkedinIn, FaGithub, FaInstagram, FaDiscord} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "github", link: "https://github.com/xtheluk4s", icon: <FaGithub /> },
  { name: "linkedin", link: "https://www.linkedin.com/in/lucas-araujo-51609b21a/", icon: <FaLinkedinIn/> },
  { name: "instagram", link: "https://www.instagram.com/lucas_araujo.c/", icon: <FaInstagram /> },
  { name: "discord", link: "https://discordapp.com/users/329331719851474945", icon: <FaDiscord /> }
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks