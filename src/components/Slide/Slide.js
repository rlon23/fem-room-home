import './Slide.scss';
import arrow from './../../images/icon-arrow.svg';

function Slide({ image, title, description }) {
  return (
    <section className='Slide'>
      <div className='Slide__image'>
        <img src={image} alt='' />
      </div>

      <div className='Slide__content'>
        <h2 className='Slide__title'>{title}</h2>
        <p className='Slide__description'>{description}</p>
        <button className='Slide__btn cta'>
          SHOP NOW<img src={arrow} alt='' className='btn-img'/>
        </button>
      </div>
    </section>
  );
}

export default Slide;
