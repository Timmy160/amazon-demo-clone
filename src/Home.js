import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg "
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61FJtVQh9bL.__AC_SY300_SX300_QL70_ML2_.jpg "
          />
          <p></p>
        </div>

        <div className="home_row">
          <Product
            id="4983850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._ AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={239.0}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-F1, 128GB) - Silver (4th Generation)"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_5X385_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49* Curved
            LED Gaming Monitor - Super Ultra Wide
            Dual WOHD 5120 x 1440* 
            "
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._ AC_5X355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
