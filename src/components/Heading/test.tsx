import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

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
      'border-left': '0.7rem solid #F231A5'
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

  it('should render a small size heading by default', () => {
    renderWithTheme(<Heading size="small">Title</Heading>)
    expect(screen.getByRole('heading', { name: /Title/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /Title/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a different size heading if on mobile', () => {
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

it('should render a heading with a huge size', () => {
  renderWithTheme(<Heading size="huge">Won Games</Heading>)

  expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
    'font-size': '5.2rem'
  })
})

it('should render a Heading with a primary line color', () => {
  renderWithTheme(
    <Heading lineColor="primary" lineLeft lineBottom>
      Lorem Ipsum
    </Heading>
  )

  const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
  expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
  expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
    modifier: '::after'
  })
})

it('should render a Heading with a secondary line color', () => {
  renderWithTheme(
    <Heading lineColor="secondary" lineLeft lineBottom>
      Lorem Ipsum
    </Heading>
  )

  const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
  expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
  expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
    modifier: '::after'
  })
})
