import './AboutFurniture.scss';
import img1 from './../../images/image-about-dark.jpg';
import img2 from './../../images/image-about-light.jpg';

function AboutFurniture() {
  return (
    <section className='AboutFurniture'>
      <div className='AboutFurniture__image'>
        <img src={img1} alt='' />
      </div>

      <div className='AboutFurniture__content'>
        <h2 className='AboutFurniture__title'>About our furniture</h2>
        <p className='AboutFurniture__description'>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>

      <div className='AboutFurniture__image'>
        <img src={img2} alt='' />
      </div> 
    </section>
  );
}

export default AboutFurniture;
