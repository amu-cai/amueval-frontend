const getSubmissionPage = (page, variantId) => {
  fetch(`${page}/view-variant/${variantId}`)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
};

export default getSubmissionPage;
