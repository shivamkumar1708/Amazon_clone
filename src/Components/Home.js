import React from "react";
import "./home.css";

import Product from "./Product";
//https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home-row">
          <Product
            id="102030"
            title="Dennis Lingo Men's Checkered Slim fit Casual Shirt"
            image="https://m.media-amazon.com/images/I/71Bo9OtlEtL._UY741_.jpg"
            price="629.00"
            rating="4"
            desc="100% premium Cotton, pre washed for an extremely soft finish and rich look
            Stylish full sleeve checkered casual shirt
            "
          />

          <Product
            id="111214"
            title="OTUS Men's Cotton Casual Slim Fit Solid Shirt"
            image="https://m.media-amazon.com/images/I/41Aemtzsa3L._UX569_.jpg"
            price="454.00"
            rating="4"
            desc="Care Instructions: Machine Wash
            Fit Type: Slim Fit
            Fit Type: Slim Fit
            100% premium Cotton, extremely soft finish and rich look"
          />
          <Product
            id="111214"
            title="Mentific® Digital Print Lycra Half Sleeve Multi Designs Shirt for Men"
            image="https://m.media-amazon.com/images/I/71XI11+QBWS._SY741._SX._UX._SY._UY_.jpg"
            price="499.00"
            rating="3"
            desc="
            100% premium Cotton, extremely soft finish and rich look"
          />
        </div>
        <div className="home-row">
          <Product
            id="141516"
            title="Samsung Galaxy A13 Blue, 4GB RAM, 64GB Storage with No Cost EMI/Additional Exchange Offers, (SM-A135FLBGINS)"
            image="https://m.media-amazon.com/images/I/81i1A1MgXBL._SX569_.jpg"
            price="13999.00"
            rating="4"
            desc="Samsung Smartphone"
          />
          <Product
            id="151617"
            title="Samsung S21 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage)"
            image="https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg"
            price="75415.00"
            rating="4"
            desc="Quad rear camera setup- Main Camera 108MP + Ultra Wide 12MP Dual Pixel Camera + Tele1 3X 10MP Dual Pixel Camera + Tele2 10x 10MP Dual pixel camera"
          />
          <Product
            id="161718"
            title="OnePlus 9 5G (Arctic Sky, 8GB RAM, 128GB Storage)"
            image="https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg"
            price="37999.00"
            rating="5"
            desc=" 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Free Form Lens,
            Qualcomm Snapdragon 888 Processor with Adreno 660 GPU"
          />
        </div>
        <div className="home-row">
          <Product
            id="171819"
            title="ASIAN"
            image="https://m.media-amazon.com/images/I/61tUCNLEjRL._AC_UL320_.jpg"
            price="999.00"
            rating="4"
            desc="Oxygen-04 Sports Running Shoes for Men's"
          />
          <Product
            id="171820"
            title="Amazon Brand - Symactive"
            image="https://m.media-amazon.com/images/I/81oKAK6ihcL._AC_UL320_.jpg"
            price="799.00"
            rating="4"
            desc="Men's Walking Shoe"
          />
          <Product
            id="171829"
            title="BATA"
            image="https://m.media-amazon.com/images/I/61WEPuOO5BL._AC_UL320_.jpg"
            price="1054.00"
            rating="4"
            desc="Mens Jalsa Laser Formal Shoes"
          />
          <Product
            id="171830"
            title="Red Chief Leather with Lace Formal Shoes for Men RC3506"
            image="https://m.media-amazon.com/images/I/81k99-CSpXL._UX500_.jpg"
            price="2299.00"
            rating="4"
            desc="Sole: Leather
            Closure: Lace-Up
            Shoe Width: Medium"
          />
        </div>
        <div className="home-row">
          <Product
            id="1867"
            title="Samsung 198 L 4 Star Inverter Direct-Cool Single Door Refrigerator"
            image="https://m.media-amazon.com/images/I/71DJffKcMZL._SY679_.jpg"
            price="16750.00"
            rating="4"
            desc="Samsung"
          />
          <Product
            id="17120"
            title="Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver)"
            image="https://m.media-amazon.com/images/I/81FyYXoQF-L._SY679_.jpg"
            price="13190.00"
            rating="5"
            desc="Samsung"
          />
          <Product
            id="1719"
            title="LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-B201ASPY, Scarlet Plumeria, Moist)"
            image="https://m.media-amazon.com/images/I/51J0BUWKiFS._SY679_.jpg"
            price="15990.00"
            rating="5"
            desc="LG"
          />
          <Product
            id="1720"
            title="Whirlpool 215 L 5 Star Inverter Direct-Cool Single Door Refrigerator "
            image="https://m.media-amazon.com/images/I/61mMrXzBmhL._SX679_.jpg"
            price="20490.00"
            rating="5"
            desc="Whirlpool"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
