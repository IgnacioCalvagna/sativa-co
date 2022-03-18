import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="row row-cols-5 py-5 my-5 border-top footer">
      <div className="col">
        <span className="d-flex align-items-center mb-3 logo-text">
          {"Sativa & Co"}
        </span>
      </div>
      <div className="col" />
      <div className="col">
        <h5>Growshop</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Home</li>
          <li className="nav-item mb-2">Features</li>
          <li className="nav-item mb-2">Pricing</li>
          <li className="nav-item mb-2">FAQs</li>
          <li className="nav-item mb-2">About</li>
        </ul>
      </div>
      <div className="col">
        <h5>Combos</h5>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">Lamparas Led</li>
          <li className="nav-item mb-2">Carpas</li>
          <li className="nav-item mb-2">Fertilizantes</li>
          <li className="nav-item mb-2">Sustratos</li>
          <li className="nav-item mb-2">Pipas y Bongs</li>
        </ul>
      </div>

      <div className="col">
        <h5>Nosotros</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Historia</li>
          <li className="nav-item mb-2">Mision</li>
          <li className="nav-item mb-2">Pricing</li>
          <li className="nav-item mb-2">FAQs</li>
          <li className="nav-item mb-2">About</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
