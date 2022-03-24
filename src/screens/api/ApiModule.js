import axios from "axios";

const getFilms = async () => {
    const response = await axios("https://ghibliapi.herokuapp.com/films", {
      params: {
        _limit: 9,
      },
    });
    // setFilms(response.data);
    // setLoading(true);
};

export const ApiModule = {
    getFilms
};
