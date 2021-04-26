import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Won Games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/Search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Open shopping cart/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/Open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/Close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show home and explore when menu full is opened', () => {
    renderWithTheme(<Menu />)

    fireEvent.click(screen.getByLabelText(/Open menu/i))
    expect(screen.getByLabelText(/Close menu/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore/i })).toBeInTheDocument()
  })

  it('should show register box when logged out and menu full is opened', () => {
    renderWithTheme(<Menu />)

    fireEvent.click(screen.getByLabelText(/Open menu/i))
    expect(screen.getByRole('button', { name: /Log in/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /My account/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /Wishlist/i })
    ).not.toBeInTheDocument()
  })

  it('should show wishlist and account logged in and menu full is opened', () => {
    renderWithTheme(<Menu username="username" />)

    fireEvent.click(screen.getByLabelText(/Open menu/i))
    expect(
      screen.queryByRole('button', { name: /Log in/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /Sign up/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /My account/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Wishlist/i })).toBeInTheDocument()
  })
})
