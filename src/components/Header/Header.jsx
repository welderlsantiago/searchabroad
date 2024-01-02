import './Header.css'
import PageLogo from '../PageLogo/PageLogo'

function Header () {
    return (
        <header className='header'>
            <PageLogo />
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