import './SingleProduct.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/api/product/${id}`).then(res => setProduct(res.data));
  }, product);

  console.log(product);

  const [mainSrc, setmainSrc] = useState(
    `https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/151/products/diseno-sin-titulo1-1f5611561891399a3116249850976584-1024-1024.png`
  );

  const arrImg = [
    product.img,
    product.img,
    product.img,
    product.img,
    product.img,
    product.img,
  ];

  const handleImageClick = event => {
    setmainSrc(event.target.src);
    console.log(document.getElementsByClassName('thumbnails-div'));
  };

  const prevImg = () => {
    if (arrImg.indexOf(mainSrc) > 0) {
      setmainSrc(arrImg[arrImg.indexOf(mainSrc) - 1]);
    }
  };

  const nextImg = () => {
    console.log(`index es`, arrImg.indexOf(mainSrc));
    console.log(`length es`, arrImg.length);
    if (arrImg.indexOf(mainSrc) < arrImg.length - 1) {
      setmainSrc(arrImg[arrImg.indexOf(mainSrc) + 1]);
    }
  };

  return (
    <div className='container singleProduct'>
      <div className='row' style={{ justifyContent: 'center' }}>
        <div className='row d-flex col-lg-5 product-images '>
          <div className='row thumbnails-div col-4'>
            <img
              className='product-thumbnail'
              src={arrImg[0]}
              onClick={handleImageClick}
            />
            <img
              className='product-thumbnail'
              src={arrImg[1]}
              onClick={handleImageClick}
            />
            <img
              className='product-thumbnail'
              src={arrImg[2]}
              onClick={handleImageClick}
            />
            <img
              className='product-thumbnail'
              src={arrImg[3]}
              onClick={handleImageClick}
            />
            <img
              className='product-thumbnail'
              src={arrImg[4]}
              onClick={handleImageClick}
            />
            <img
              className='product-thumbnail'
              src={arrImg[5]}
              onClick={handleImageClick}
            />
          </div>
          <div className='main-image col-8'>
            <img
              id='featured'
              className='img-fluid product-img'
              style={{
                alignSelf: 'center',
                width: 'auto',
                maxHeight: '400px',
                margin: 'auto',
              }}
              src={mainSrc}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <div onClick={prevImg} className='arrow'>
                {'<'}
              </div>
              <div onClick={nextImg} className='arrow'>
                {'>'}
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-7'>
          <h1 className='text-start product-name'>{product.name}</h1>
          <div className='rating-div text-start'>
            {' '}
            {'rating 4'} {'star-icon'} {'2 Reviews'}
          </div>
          <div className='product-price text-start d-flex'>
            <span className='price'>$ {product.price}</span>
            <span className='stock'>Stock {product.stock}</span>
          </div>

          <div className='product-description text-start'>
            <h4>Detalles del producto</h4>
            <p>{product.description}</p>
          </div>
          <div className='text-start'>
            <label htmlFor='quantity'>Cantidad: </label>
            <div className='d-flex buyDiv'>
              <div className='d-flex'>
                <button className='btn btn-light'>+</button>
                <input
                  id='quantity'
                  style={{ maxWidth: '80px', textAlign: 'center' }}
                  className='form-control'
                  placeholder='1'
                ></input>
                <button className='btn btn-light'>-</button>
              </div>
              <button className='btn btn-primary'>Agregar a carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
