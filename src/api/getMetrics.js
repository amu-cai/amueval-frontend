const getMetrics = (setState) => {
  fetch(`http://localhost:8000/evaluation/get-metrics`)
    .then((response) => response.json())
    .then((data) => {
      setState(data);
    });
};

export default getMetrics;
