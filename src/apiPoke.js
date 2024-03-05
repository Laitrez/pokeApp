import axios from "axios";
import { useSelector } from "react-redux";

export const get = async (value) => {
  try {
    const response = await axios.get(
      `https://pokebuildapi.fr/api/v1/pokemon/${value}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPoke = async () => {
  try {
    const response = await axios.get(
      `https://pokebuildapi.fr/api/v1/pokemon/limit/100`
    );

    //   setMovies(response.data.results);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
