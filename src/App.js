import './App.scss';
import Navbar from './components/Navbar/Navbar';
import bg from './images/mobile-image-hero-1.jpg';

function App() {
  return (
    <div className='App'>
      <header className='App__header'>
        <Navbar />
      </header>
      <main>
        <img src={bg} alt='' />
        <img src={bg} alt='' />
        <img src={bg} alt='' />


        <div className='attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='https://github.com/rlon23' target='_blank'>Arlony Diaz</a>.
        </div>
      </main>
    </div>
  );
}

export default App;
