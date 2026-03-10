import React, { useEffect, useState } from "react";
import { getAllListings } from "../api/api";
import ListingCard from "../components/ListingCard";

function Listings() {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchListings = async () => {
      try {
        const res = await getAllListings();
        setListings(res.data);
      } catch (err) {
        console.error("Error fetching listings", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();

  }, []);

  if (loading) {
    return <p>Loading listings...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Travel Experiences</h2>

      {listings.length === 0 && <p>No listings found</p>}

      {listings.map((listing) => (
        <ListingCard key={listing._id} listing={listing} />
      ))}

    </div>
  );
}

export default Listings;