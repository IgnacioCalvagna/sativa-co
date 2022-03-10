import "../style/Grid.css"

const Card = ({ data }) => {
    return (
      <div className="card" width="150" height="250">
        <div className="card-body">
              <h5 className="card-title" >{data.name}</h5>
            <img class="card-img"  
            src={data.images[0] ? data.images[0].url : 
                "https://peugeot.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png"} alt="Card image cap"
            />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;

