import '../style/Carousel.css'

import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  const arrImgBanner = [
    "https://www.greenqueenshop.com/wp-content/uploads/2017/11/banner.jpg",
    "https://www.the-grow-shop.ca/wp-content/uploads/2020/07/the-grow-shop-banner-july-2020-facebook.jpg",
    "https://merkagrow.com/img/cms/banner_fast_buds.jpg",
  ];

  return (
    <div className="carousel-div">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'./banner1.jpg'}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'./banner2.jpg'}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'./banner3.jpg'}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
