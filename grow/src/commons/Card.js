import '../style/Grid.css';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{data.name}</h5>
        <div className='image-grid-container'>
          <Link to={`/product/${data.id}`}>
            <img
              class='card-img'
              src={
                data.img
                  ? data.img
                  : 'https://peugeot.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png'
              }
              alt='Card image cap'
            />
          </Link>
        </div>
        <div className='container-grid'>
          <Link to={`/product/${data.id}`}>
            <div>
              <button type='button' className='buttonItem'>
                Ver Detalles
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-left'></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
