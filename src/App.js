import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Slide from './components/Slide/Slide';
import bg_1 from './images/mobile-image-hero-1.jpg';
import bg_2 from './images/mobile-image-hero-2.jpg';
import bg_3 from './images/mobile-image-hero-3.jpg';

function App() {
  return (
    <div className='App'>
      <header className='App__header'>
        <Navbar />
      </header>
      <main>
        <Slide
          image={bg_1}
          title={'Discover innovative ways to decorate'}
          description={
            'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
          }
        />
        <Slide
          image={bg_2}
          title={'We are available all across the globe'}
          description={
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
          }
        />
        <Slide
          image={bg_3}
          title={'Manufactured with the best materials'}
          description={
            'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
          }
        />

        <div className='attribution'>
          Challenge by{' '}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href='https://github.com/rlon23' target='_blank' rel='noreferrer'>
            Arlony Diaz
          </a>
          .
        </div>
      </main>
    </div>
  );
}

export default App;
