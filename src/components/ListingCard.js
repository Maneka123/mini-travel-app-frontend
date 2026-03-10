import React from "react";

function ListingCard({ listing }) {

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      margin: "15px 0",
      borderRadius: "8px"
    }}>

      <h3>{listing.title}</h3>

      <p>{listing.description}</p>

      {listing.price && <p><strong>Price:</strong> ${listing.price}</p>}

    </div>
  );
}

export default ListingCard;