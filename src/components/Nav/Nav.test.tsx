import React from 'react'
import { render, screen } from '@testing-library/react'

import { Nav } from '.'

describe('<Nav />', () => {
  it('should render link with twitch channel', () => {
    render(<Nav />)

    expect(
      screen.getByRole('link', { name: /ir para canal da twitch/i })
    ).toHaveProperty('href', 'https://www.twitch.tv/devlucaslopes')
  })
  it('should render avatar image', () => {
    render(<Nav />)

    expect(
      screen.getByRole('img', { name: /avatar da twitch/i })
    ).toHaveProperty('src', 'http://localhost/avatar.png')
  })
  it('should render list with 3 links', () => {
    render(<Nav />)

    expect(screen.getAllByRole('listitem').length).toBe(3)

    expect(screen.getByTitle('Ir para perfil no Instagram')).toHaveProperty(
      'href',
      'https://www.instagram.com/devlucaslopes/'
    )

    expect(screen.getByTitle('Ir para canal no Youtube')).toHaveProperty(
      'href',
      'https://www.youtube.com/channel/UCh9vtTY15vToM0vWjgfq8WQ'
    )

    expect(screen.getByTitle('Ir para perfil no Github')).toHaveProperty(
      'href',
      'https://github.com/devlucaslopes'
    )
  })
})
