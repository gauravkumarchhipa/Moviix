// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";

// const TMDB_TOKEN = 
// "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzM5Y2E1YWVmZGUyNmFiZWZkYmI3NzNmZDcxNjJjOCIsInN1YiI6IjY0MjAxMGVkMjNiZTQ2MDBjMGY1ODk5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yDsUNvpKkVeZYTFeSefKqZziHMZZeaME8RC4XuYwm1w";
// // import.meta.env.REACT_APP_TMDB_TOKEN;

// const headers = {
//     Authorization : "bearer " + TMDB_TOKEN,
// };

// export const fetchDataFromApi = async(url, params)=>{
//     try{
//         const {data} = await axios.get(BASE_URL + url, {
//             headers,
//             params
//         })
//         return data;
//     } catch (err){
//         console.log(err);
//         return err;
//     }
// }



import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU5MzM1Yjg5Y2E3NWE3MGJjY2UxYzcyYmZkMDQ4ZCIsInN1YiI6IjYzYmVkN2FiODU4Njc4MDBmMDhjZjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHes_rn51wewxY_7nZLxGssnd67J8ieiLOIo2Bg_FI";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};