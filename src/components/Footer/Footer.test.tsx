import React from 'react'
import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText(/criado por @devlucaslopes/i)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveProperty(
      'href',
      'http://twitch.tv/devlucaslopes'
    )
  })

  it('should center text', () => {
    render(<Footer />)

    expect(screen.getByTestId('footer-content')).toHaveClass(
      'flex justify-center'
    )
  })
})
