import * as React from 'react'

interface AppShellProps {
  children?: JSX.Element[]
}
interface AppShellState {
  menuOpen: boolean
  searchOpen: boolean
}

import './AppShell.styles.css'

export class AppShell extends React.Component<AppShellProps, AppShellState> {
  state = {
    menuOpen: false,
    searchOpen: false
  }

  openMenu = () => this.setState({menuOpen: true})
  openSearch = () => this.setState({searchOpen: true})

  render() {
    const { children } = this.props
    return (
      <div className='appShell'>
        <div className='appShell--menuButtons'>
          <button className='appShell--menuButton' onClick={this.openMenu}>
            <i className='fas fa-plus' />
          </button>
          <br />
          <button className='appShell--menuButton' onClick={this.openSearch}>
            <i className='fas fa-search' />
          </button>
        </div>
        {children}
      </div>
    )
  }
}