import './Slide.scss';
import arrow from './../../images/icon-arrow.svg';
import iconPrev from './../../images/icon-angle-left.svg'
import iconNext from './../../images/icon-angle-right.svg'

function Slide({ image, title, description, onClick }) {
  return (
    <section className='Slide'>
      <div className='Slide__image'>
        <img src={image} alt='' />

        <div className="prev" onClick={() => onClick(-1)}>
          <img src={iconPrev} alt="" className='icon'/>
        </div>
        <div className="next" onClick={() => onClick(1)}>
          <img src={iconNext} alt="" className='icon'/>
        </div>
      </div>

      <div className='Slide__content'>
        <h2 className='Slide__title'>{title}</h2>
        <p className='Slide__description'>{description}</p>
        <button className='Slide__btn cta'>
          shop now<img src={arrow} alt='' className='btn-img'/>
        </button>
      </div>
    </section>
  );
}

export default Slide; 
