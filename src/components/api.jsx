import axios from "axios";
import { useEffect, useState } from "react";

const getData = async () => {
  const response = await axios.get("https://648afd5417f1536d65ea15b8.mockapi.io/api/data");
  return response.data;
};

export default getData;
