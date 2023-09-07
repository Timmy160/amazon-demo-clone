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
            id="12981341"
            title="Lenovo IdeaPad 15.6 FHD Touchscreen Laptop, Intel Core i5-1135G7 Quad-Core Processor (Beats i7-1065G7), Intel Iris Xe Graphics, Long Battery Life, Windows 11 (20GB RAM | 1TB PCIe SSD)"
            price={649}
            image="https://m.media-amazon.com/images/I/71Afp-c3RqL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="49567094"
            title="Amazon Essentials Women's Classic-Fit Full-Zip Polar Soft Fleece Jacket (Available in Plus Size)"
            price={50}
            rating={4}
            image="https://m.media-amazon.com/images/I/81TW1gyWBJL._MCnd_AC_UL320_.jpg"
          />
          <p></p>
        </div>

        <div className="home_row">
          <Product
            id="4987850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._ AC_SX466_.jpg"
          />
          <Product
            id="23995930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={239.0}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>

        <div className="home_row">
          <Product
            id="90822332"
            title="Simple Modern Insulated Tumbler with Lid and Straw | Iced Coffee Cup Reusable Stainless Steel Water Bottle Travel Mug | Gifts for Women Men Her Him | Classic Collection | 28oz | Black Leopard"
            price={40}
            rating={5}
            image="https://m.media-amazon.com/images/I/71gv9yizRzL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="3254358845"
            title="Amazon Basics 20-Pack AA Alkaline High-Performance Batteries, 1.5 Volt, 10-Year Shelf Life"
            price={15}
            rating={4}
            image="https://m.media-amazon.com/images/I/81ruqa5pXML._AC_UL320_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90821132"
            title="Lenovo IdeaPad 3 Laptop, 14' FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 256GB Storage, AMD Radeon 7 Graphics, Windows 11 Home, Abyss Blue"
            price={509}
            rating={5}
            image="https://m.media-amazon.com/images/I/71eLIuDmIgL._AC_UL320_.jpg"
          />
          <Product
            id="99229332"
            title="iChunhua Women's Comfy Stretch Floral Print Drawstring Palazzo Wide Leg Lounge Pant"
            price={46}
            rating={4}
            image="https://m.media-amazon.com/images/I/71xGHnu6a0L._AC_UY500_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90659332"
            title="Home Prefer Mens UPF 50+ Sun Protection Cap Wide Brim Fishing Hat with Neck Flap"
            price={16}
            rating={5}
            image="https://m.media-amazon.com/images/I/718XsNNKqoL._AC_UL320_.jpg"
          />
          <Product
            id="90759332"
            title="HOBIBEAR Boys and Girls Classic Graphic Garden Clogs Slip on Water Shoes(Toddler/Little Kids/Big Kids)"
            price={25}
            rating={5}
            image="https://m.media-amazon.com/images/I/71wGyzhDOyS._AC_UL320_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90826332"
            title="Suwangi Mens Hiking Cargo Shorts Quick-Dry Outdoor Athletic Short Travel Fishing Golf Tactical Short for Men with Multipocket"
            price={26}
            rating={4}
            image="https://m.media-amazon.com/images/I/61omKPKPUcL._AC_UL320_.jpg"
          />
          <Product
            id="90029332"
            title="Damascus Knife Set with Block for Kitchen, VG10 Steel and Triple Rivet Handle, Included Serrated Steak Knife Set of 6, Meat Fork, Chef Knife Set, Knife Sharpener,Kitchen Scissor, Knife Block Set,16pcs
            "
            price={289}
            rating={4}
            image="https://m.media-amazon.com/images/I/81tncGhyhcL._AC_UL320_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90829832"
            title="Mini drone Toy with camera: 4K HD FPV Mini Drone Toy - Foldable, Carrying Case, 90° Adjustable Lens, One Key Take Off/Land, Altitude Hold, 360° Flip, 2 Batteries, Obstacle Avoidance, Hovering Protection"
            price={120}
            rating={5}
            image="https://m.media-amazon.com/images/I/71oSNgIpoML._AC_UL320_.jpg"
          />
          <Product
            id="90829339"
            title=" 12-Plug Wall Outlet Extender with Shelf, Power Strips, Surge Protector 12 AC Outlets Multi Plug Outlet, 3 USB Ports (1 USB C Port) Wall Plug Expander for Home, Office, School"
            price={15}
            rating={5}
            image="https://m.media-amazon.com/images/I/51f4vw-x-SL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
