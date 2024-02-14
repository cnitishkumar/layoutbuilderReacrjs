import Header from '../Header'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbar = () => (
        <nav className="nav-bar left-navbar">
          <h2 className="nav-bar-heading">Left Navbar Menu</h2>
          <ul className="left-nav-ul-el">
            <li className="list-item">Item 1</li>
            <li className="list-item">Item 2</li>
            <li className="list-item">Item 3</li>
            <li className="list-item">Item 3</li>
          </ul>
        </nav>
      )

      const renderBody = () => (
        <div className="content-body">
          <h2 className="body-heading">Content</h2>
          <p className="body-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      )

      const renderRightNavbar = () => (
        <nav className="nav-bar right-navbar">
          <h2 className="nav-bar-heading">Right Navbar</h2>
          <div className="right-nav-containers">
            <div className="right-nav-item-container">
              <p>Ad 1</p>
            </div>
            <div className="right-nav-item-container">
              <p>Ad 2</p>
            </div>
          </div>
        </nav>
      )

      return (
        <div className="body-container">
          {showLeftNavbar ? renderLeftNavbar() : null}
          {showContent ? renderBody() : null}
          {showRightNavbar ? renderRightNavbar() : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
