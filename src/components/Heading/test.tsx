import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Title</Heading>)
    expect(screen.getByRole('heading', { name: /Title/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Title</Heading>)
    expect(screen.getByRole('heading', { name: /Title/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line on the left side', () => {
    renderWithTheme(<Heading lineLeft>Title</Heading>)
    expect(screen.getByRole('heading', { name: /Title/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with a line on the bottom side', () => {
    renderWithTheme(<Heading lineBottom>Title</Heading>)
    expect(screen.getByRole('heading', { name: /Title/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a normal size heading by default', () => {
    renderWithTheme(<Heading lineBottom>Title</Heading>)
    expect(screen.getByRole('heading', { name: /Title/i })).toHaveStyle({
      'font-size': '2.8rem'
    })
  })

  it('should render a smaller size heading if on mobile', () => {
    renderWithTheme(<Heading lineBottom>Title</Heading>)
    expect(screen.getByRole('heading', { name: /Title/i })).toHaveStyleRule(
      'font-size',
      '2.0rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
