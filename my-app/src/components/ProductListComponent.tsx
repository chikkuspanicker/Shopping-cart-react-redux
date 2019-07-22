import React, { Component } from "react";
import { Product } from "../ducktypings/Product";
import ProductAlertComponent from "./ProductAlertComponent";

const Products: Array<Product> = [
  { name: "Phone XL", desc: "A large phone with one of the best screens" },
  { name: "Phone Mini", desc: "A great phone with one of the best cameras" },
  { name: "Phone Standard" }
];
const ProductListComponent: React.FC = props => (
  <ul>
    {Products.map((product: Product, key: number) => {
      return (
        <li key={key}>
          <a href={`/${product.name}`}>{product.name}</a>
          {product.desc && <p>{product.desc}</p>}
          <ProductAlertComponent {...product} />
        </li>
      );
    })}
  </ul>
);

export default ProductListComponent;
