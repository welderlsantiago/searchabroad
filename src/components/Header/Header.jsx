import './Header.css'
import { ReactComponent as Logo} from '../../images/Vector.svg'

function Header () {
    return (
        <header className='header'>
            <div className='companyDescriptionPhrases'>
                <span id='companyName'>SearchAbroad</span>
                <span id='companyPhrase'>Quote and find all you need.</span>
            </div>
            <nav className='nav'>
                <a href='#'>Home</a>
                <a href='#'>Support</a>
            </nav>
        </header>
    )
}

export default Header;