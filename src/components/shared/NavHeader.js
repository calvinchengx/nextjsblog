import Logo from './Logo'
import NavButton from './NavButton'

export default class NavHeader extends React.Component {
  render() {
    return (
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="flex items-center -mx-6">
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            <div className="flex items-center">
              <a href="/" className="block lg:mr-4">
                <Logo />
              </a>
            </div>
          </div>
          <NavButton />
        </div>
      </div>
    )
  }
}
