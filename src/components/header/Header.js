import React, { useState } from 'react';
import Logo from '../../media/Logo.svg';
import { Link } from 'react-router-dom';
import Elips from '../../media/ElipsHeader.svg';
import HeaderCSS from './Header.module.scss';
import SliderCSS from './Slider.module.css';
import RobotSlider from '../../media/RobotSlider.svg';
import LongbordSlider from '../../media/LongbordSlider.svg';
import Racet from '../../media/Racet.svg';
import TreangleSlider from '../../media/TreangleSlider.svg';

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const images = [
    LongbordSlider,
    RobotSlider,
    Racet,
    TreangleSlider
  ];

  return (
    <>
      <section className={HeaderCSS.header}>
        <div className={HeaderCSS.headerLeft}>
          <div className={HeaderCSS.imgHeader}>
            <img src={Elips} alt="Elips" />
          </div>
          <div className={HeaderCSS.HeaderText}>
            <h4>ProFixGum - elastyczne dodatki do ubrań</h4>
            <h6>
              Dosyć bycia jednostajnym i nie zmieniać się przez lata, nadszedł
              czas na coś odważnego i nowego!
            </h6>
            <a href="#form">
              <div className={HeaderCSS.button_order_call}>
                Zamów konsultację
              </div>
            </a>
          </div>
        </div>
        <div className={HeaderCSS.headerRight}>
          <div className={SliderCSS.slider}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${SliderCSS.img} ${
                  currentImageIndex === index ? SliderCSS.curry : ''
                }`}
              >
                <img src={image} alt={`Slider Image ${index}`} />
              </div>
            ))}
          </div>
          <div className={SliderCSS.slide_btn}>
            <div className={`${SliderCSS.next} ${SliderCSS.n}`} onClick={nextImage}>
              <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14.384" y="27.9227" width="19.7875" height="4.7763" transform="rotate(-135.802 14.384 27.9227)" fill="white"/>
                <rect x="14.384" y="27.9227" width="19.7875" height="4.7763" transform="rotate(-135.802 14.384 27.9227)" fill="white"/>
                <rect x="14.384" y="27.9227" width="19.7875" height="4.7763" transform="rotate(-135.802 14.384 27.9227)" fill="white"/>
                <rect x="14.384" y="27.9227" width="19.7875" height="4.7763" transform="rotate(-135.802 14.384 27.9227)" fill="#414651"/>
                <rect x="17.7136" y="3.48816" width="19.7875" height="4.7763" transform="rotate(136.912 17.7136 3.48816)" fill="white"/>
                <rect x="17.7136" y="3.48816" width="19.7875" height="4.7763" transform="rotate(136.912 17.7136 3.48816)" fill="white"/>
                <rect x="17.7136" y="3.48816" width="19.7875" height="4.7763" transform="rotate(136.912 17.7136 3.48816)" fill="white"/>
                <rect x="17.7136" y="3.48816" width="19.7875" height="4.7763" transform="rotate(136.912 17.7136 3.48816)" fill="#414651"/>
              </svg>
            </div>
            <div className={`${SliderCSS.prev} ${SliderCSS.n}`} onClick={prevImage}>
            <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3.32968" y="3.05176e-05" width="19.7875" height="4.7763" transform="rotate(44.1976 3.32968 3.05176e-05)" fill="white"/>
              <rect x="3.32968" y="3.05176e-05" width="19.7875" height="4.7763" transform="rotate(44.1976 3.32968 3.05176e-05)" fill="white"/>
              <rect x="3.32968" y="3.05176e-05" width="19.7875" height="4.7763" transform="rotate(44.1976 3.32968 3.05176e-05)" fill="white"/>
              <rect x="3.32968" y="3.05176e-05" width="19.7875" height="4.7763" transform="rotate(44.1976 3.32968 3.05176e-05)" fill="#414651"/>
              <rect x="9.15527e-05" y="24.4346" width="19.7875" height="4.7763" transform="rotate(-43.0883 9.15527e-05 24.4346)" fill="white"/>
              <rect x="9.15527e-05" y="24.4346" width="19.7875" height="4.7763" transform="rotate(-43.0883 9.15527e-05 24.4346)" fill="white"/>
              <rect x="9.15527e-05" y="24.4346" width="19.7875" height="4.7763" transform="rotate(-43.0883 9.15527e-05 24.4346)" fill="white"/>
              <rect x="9.15527e-05" y="24.4346" width="19.7875" height="4.7763" transform="rotate(-43.0883 9.15527e-05 24.4346)" fill="#414651"/>
            </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;