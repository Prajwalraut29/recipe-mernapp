import axios from "axios";

export const getFavourites = async (id) => {
    const res = await axios.get(`https://recipe-mernweb-app.onrender.com/api/getFavourites/${id}`, {
        withCredentials: true,
    });
    const data = await res.data;
    return data.favourites;
};