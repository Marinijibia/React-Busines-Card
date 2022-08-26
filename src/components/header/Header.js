import './Header.css'
import img from '../Assests/1.png'


const Header = () => {
    return (
        <div className='main-header'>
            <img src={img} className='image' alt='Umar' />
        </div>
    )
}


export default Header;