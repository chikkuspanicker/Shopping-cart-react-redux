import React, { Component, Fragment } from "react";
import { Product } from "../ducktypings/Product";

const ProductAlertComponent: React.FC<Product> = (props: Product) => {
    console.log(props)
  return (
    <Fragment>
      <div>
        <button>Notify Me</button>
      </div>
      {props && (
        <div>
          <button>Notify Me</button>
        </div>
      )}
    </Fragment>
  );
};

export default ProductAlertComponent;
