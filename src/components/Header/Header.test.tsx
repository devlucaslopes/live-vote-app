import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Header } from '.'
import {
  SuggestionProvider,
  SuggestionContext
} from '../../contexts/SuggestionContext'

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = render(<Header>Lorem ipsum</Header>)

    expect(screen.getByRole('heading').textContent).toBe('Lorem ipsum')
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  // xit('should call openNewSuggestion() when button is clicked', () => {
  //   render(
  //     <SuggestionProvider>
  //       <Header>Lorem ipsum</Header>
  //     </SuggestionProvider>
  //   )

  //   fireEvent.click(screen.getByRole('button'))

  //   screen.debug()

  //   expect(openNewSuggestion).toHaveBeenCalledTimes(1)
  // })
})
