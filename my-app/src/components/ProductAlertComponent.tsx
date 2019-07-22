import React, { Component, Fragment } from "react";
import { Product } from "../ducktypings/Product";

const ProductAlertComponent: React.FC<Product> = (props: Product) => {
  return (
    <Fragment>
      {props.price && props.price < 7000 && (
        <div>
          <button>Notify Me</button>
        </div>
      )}
    </Fragment>
  );
};

export default ProductAlertComponent;
