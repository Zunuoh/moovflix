import axios from "axios";

const getFilms = async () => {
  const response = await axios("https://ghibliapi.herokuapp.com/films", {
    params: {
      _limit: 9,
    },
  });
  return response['data']; 
};

const getFilmById = async (filmId) =>{
  const data = await axios(
    `https://ghibliapi.herokuapp.com/films/${filmId}`,
    {
      params: {
        _limit: 1,
      },
    }
  );
  return data.data;
}

export const ApiModule = {
  getFilms,
  getFilmById
};