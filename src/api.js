import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": "6xv6j8dfkkre0pbm9ctycio9e7v6bc",
    Authorization: "Bearer s560ax9yic7gjxm1c1i3zq5caudix7",
    accept: "application/vnd.twitchtv.v5+json",
  },
});

export default api;
