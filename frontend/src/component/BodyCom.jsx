import React from "react";

const BodyCom = ({productItems, imageStyle, productStyle, productName, productPrice, productTextStyle }) => {
  return (
    <section>
      <div>
        <img
          src={productItems.image}
          alt={productItems.name}
          className={`${imageStyle}`}
        />
        <div className={`${productStyle}`}>
          <h3 className={`${productName}`}>{productItems.name}</h3>
          <p className={`${productPrice}`}>price: {productItems.price}₹</p>
        </div>
        <p className={`${productTextStyle}`}>{productItems.description}</p>
      </div>
    </section>
  );
};

export default BodyCom;
