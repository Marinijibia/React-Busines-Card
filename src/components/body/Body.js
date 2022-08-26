import About from './About';
import './Body.css'
import Interests from './Interests';
import Name from './Name';


const Body = () => {
    return (
        <div className='main-body'>
            <Name />
            <About />
            <Interests />
        </div>
    )
}

export default Body;