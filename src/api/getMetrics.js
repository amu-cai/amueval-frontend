import { API } from "../utils/globals";

const getMetrics = (setState) => {
  fetch(`${API}/evaluation/get-metrics`)
    .then((response) => response.json())
    .then((data) => {
      setState(data);
    });
};

export default getMetrics;
