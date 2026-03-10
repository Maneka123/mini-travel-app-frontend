import axios from "axios";

const API_BASE = "https://mini-travel-experience-listing-plat-omega.vercel.app/api";

const API = axios.create({
  baseURL: "https://mini-travel-experience-listing-plat-omega.vercel.app/api",
  withCredentials: true // use true if cookies are used
});
// Auth
export const registerUser = (data) => axios.post(`${API_BASE}/register`, data, { withCredentials: true });
export const loginUser = (data) => axios.post(`${API_BASE}/login`, data, { withCredentials: true });
export const logoutUser = () => axios.post(`${API_BASE}/logout`, {}, { withCredentials: true });

// Listings
//export const getAllListings = () => axios.get(`${API_BASE}/getListings`);
//export const getAllListings = () => axios.get(`${API_BASE}/listings`);
// Listings
export const getAllListings = (token) =>
  API.get("/listings", {
    headers: { Authorization: `Bearer ${token}` }
  });
export const getMyListings = () => axios.get(`${API_BASE}/getListings?mine=true`);
export const getListingDetail = (id) => axios.get(`${API_BASE}/getListing?id=${id}`);
export const createListing = (data) => axios.post(`${API_BASE}/createListing`, data, { withCredentials: true });
export const editListing = (id, data) => axios.put(`${API_BASE}/editListing`, { id, ...data }, { withCredentials: true });
export const deleteListing = (id) => axios.delete(`${API_BASE}/deleteListing?id=${id}`, { withCredentials: true });

// Saved/Like
export const likeListing = (id) => axios.post(`${API_BASE}/likeListing`, { id }, { withCredentials: true });
export const getSavedListings = () => axios.get(`${API_BASE}/manageSavedListings`, { withCredentials: true });
export const saveListing = (id) => axios.post(`${API_BASE}/manageSavedListings`, { id }, { withCredentials: true });
export const removeSavedListing = (id) => axios.delete(`${API_BASE}/manageSavedListings?id=${id}`, { withCredentials: true });

// Search
export const searchListings = (query) => axios.get(`${API_BASE}/searchListings?q=${query}`);