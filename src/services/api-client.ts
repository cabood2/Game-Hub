import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "287a3e4f33554ca19a9fbe023e71c0a9",
  },
});
