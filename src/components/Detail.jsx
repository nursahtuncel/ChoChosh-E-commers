import React, { use } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/productSlice";
import { CiCircleMinus } from "react-icons/ci";
import { useEffect } from "react";
import { useState } from "react";

import "../css/Detail.css";

const Detail = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const product = products.find((item) => item.id === parseInt(id));

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="detail-container">
      <h2 className="detail-title">{product.title}</h2>
      <p className="detail-desc">{product.description}</p>
      <p className="detail-category">Category: {product.category}</p>

      <img className="detail-image" src={product.image} alt={product.title} />

      <p className="detail-price">${product.price}</p>

      <div className="quantity-wrapper">
        <button className="qty-btn" onClick={handleDecrement}>
          <CiCircleMinus />
        </button>

        <span className="qty-count">{count}</span>

        <button className="qty-btn" onClick={handleIncrement}>
          <CiCirclePlus />
        </button>
      </div>

      <button className="add-to-cart">Sepete Ekle</button>
    </div>
  );
};

export default Detail;
