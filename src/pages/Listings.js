import React, { useEffect, useState } from "react";
import { getAllListings } from "../api/api"; // make sure this exists
import ListingCard from "../components/ListingCard";

function Listings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await getAllListings();
        console.log("API Response:", res.data); // ✅ Check data in console

        // Make sure to use the `listings` property from backend
        setListings(res.data.listings || []);
      } catch (err) {
        console.error("Error fetching listings:", err);
        setError("Failed to load listings");
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
          <ListingCard key={listing._id} listing={listing} />
        ))
      )}
    </div>
  );
}

export default Listings;