import './SingleProduct.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { addOrCreateItemCart } from '../state/itemCart';
import { useDispatch, useSelector } from 'react-redux';
import Comments from '../components/Comments';

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const [mainSrc, setMainSrc] = useState('');
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const shoppingCart = useSelector(state => state.shoppingCart);

  const handleOnclick = (productId, quantity) => {
    if (!user.id) {
      console.log('aprete agregar a carrito perro');
      return;
    }
    dispatch(
      addOrCreateItemCart({
        ShoppingCartId: shoppingCart.id,
        productId,
        quantity,
      })
    );
  };

  useEffect(() => {
    axios.get(`/api/product/${id}`).then(res => {
      setProduct(res.data);
    });
  }, [id]);

  const handleImageClick = event => {
    setMainSrc(event.target.src);
  };

  const prevImg = () => {
    if (product.img.indexOf(mainSrc) > 0) {
      setMainSrc(product.img[product.img.indexOf(mainSrc) - 1]);
    }
  };

  const nextImg = () => {
    if (product.img.indexOf(mainSrc) < product.img.length - 1) {
      setMainSrc(product.img[product.img.indexOf(mainSrc) + 1]);
    }
  };

  return (
    <div className='container singleProductDiv'>
      <div className='row' style={{ justifyContent: 'center' }}>
        <div className='row d-flex col-lg-5 product-images '>
          <div className='row thumbnails-div col-4'>
            {product.img
              ? product.img.map((ruta, index) => {
                  return (
                    <img
                      className='product-thumbnail'
                      src={ruta}
                      onClick={handleImageClick}
                      alt='product'
                      key={index}
                    ></img>
                  );
                })
              : null}
          </div>
          <div className='main-image col-8'>
            <img
              id='featured'
              className='img-fluid product-img'
              alt='main product'
              style={{
                alignSelf: 'center',
                width: 'auto',
                maxHeight: '400px',
                margin: 'auto',
              }}
              src={
                product.img
                  ? mainSrc
                    ? mainSrc
                    : product.img[0]
                  : 'https://peugeot.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png'
              }
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
              }}
              className='arrowDiv'
            >
              <button onClick={prevImg} className='arrow'>
                <ion-icon name='chevron-back-circle-outline'></ion-icon>
              </button>
              <button onClick={nextImg} className='arrow'>
                <ion-icon name='chevron-forward-circle-outline'></ion-icon>
              </button>
            </div>
          </div>
        </div>

        <div className='col-lg-7'>
          <h1 className='text-start product-name'>{product.name}</h1>
          <div className='rating-div text-start'>
            <span className='rating-span'>
              <span className='ratingNumber-span'>{'4'}</span>{' '}
              <ion-icon name='star-outline'></ion-icon>
            </span>{' '}
            <span>{2} Reviews</span>
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
                <button
                  className='btn btn-light'
                  onClick={() => {
                    if (quantity > 0) setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <input
                  id='quantity'
                  style={{ maxWidth: '80px', textAlign: 'center' }}
                  className='form-control'
                  placeholder='1'
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                ></input>
                <button
                  className='btn btn-light'
                  onClick={() => setQuantity(parseInt(quantity) + 1)}
                >
                  +
                </button>
              </div>
              <button
                className='btn btn-primary'
                onClick={() => handleOnclick(product.id, quantity)}
              >
                Agregar a carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SingleProduct;
