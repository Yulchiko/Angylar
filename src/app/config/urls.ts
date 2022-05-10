import {environment} from "src/environments/environment";

const {API, key} = environment;


export const urls = {
      movie: `${API}/movie`,
      movies:`${API}/discover/movie`,
    genres: `${API}/genre/movie/list`,
    genre: `${API}/genre`,
    search: `${API}/search/keyword?query=`,
}
