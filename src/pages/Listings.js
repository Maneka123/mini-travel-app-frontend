import React, { useEffect, useState } from "react";
import { getAllListings } from "../api/api";

function Listings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const token = localStorage.getItem("token"); // ✅ get token
        if (!token) throw new Error("Not logged in");

        const res = await getAllListings(token);
        setListings(res.data.listings || []);
      } catch (err) {
        console.error("Error fetching listings:", err);
        setError("You must be logged in to see listings");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <p>Loading listings...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Travel Experiences</h2>
      {listings.length === 0 ? (
        <p>No listings found</p>
      ) : (
        listings.map((listing) => (
          <div key={listing._id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0", borderRadius: "8px" }}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            {listing.price && <p><strong>Price:</strong> ${listing.price}</p>}
          </div>
        ))
      )}
    </div>
  );
}

export default Listings;