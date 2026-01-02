import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { id, title, price, image, description } = product;

  const navigate= useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
 
  };

  return (
    <div
      style={{
        height: "-webkit-fill-available",
        width: "260px",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "contain",
        }}
      />

      <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
        {title}
      </h3>

      <p
        style={{
          fontSize: "14px",
          color: "#6b7280",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#16a34a",
          }}
        >
          {price} ₺
        </span>

        <button
     onClick={() => handleProductClick(id)}

          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "#fff",
            cursor: "pointer",
          }}
        >
         
         İncele
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
