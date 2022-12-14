import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';



const App = () => {
  return (
    <div className='body'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
