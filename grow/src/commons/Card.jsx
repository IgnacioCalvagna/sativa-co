import ButtonsCard from "./ButtonCard";

const Card = ({ data }) => {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
            src={
                // data.images[0] ? data.images[0].url : 
                "https://peugeot.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png"}
            alt="Placeholder"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <div className="media-content">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;