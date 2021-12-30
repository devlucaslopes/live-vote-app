import React from 'react'
import {
  FiInstagram as InstagramIcon,
  FiYoutube as YoutubeIcon,
  FiGithub as GithubIcon
} from 'react-icons/fi'

export const Nav = () => (
  <nav className="h-16 py-2 bg-pink-500">
    <div className="flex justify-between items-center container mx-auto">
      <a
        href="https://www.twitch.tv/devlucaslopes"
        target="_blank"
        className="flex items-center"
        rel="noreferrer"
        title="Ir para canal da Twitch"
      >
        <img src="./avatar.png" alt="@devlucaslopes" className="w-12 mr-4" />
        Aprenda programação ao vivo!
      </a>

      <ul className="flex gap-4">
        <li>
          <a href="#" title="Ir para perfil no Instagram">
            <InstagramIcon size={24} />
          </a>
        </li>
        <li>
          <a href="#" title="Ir para canal no Youtube">
            <YoutubeIcon size={24} />
          </a>
        </li>
        <li>
          <a href="#" title="Ir para perfil no Github">
            <GithubIcon size={24} />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)
