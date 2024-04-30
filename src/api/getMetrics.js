import {API} from "../utils/globals";

const getMetrics = (setState) => {
    fetch(`${API}/evaluation/get-metrics`)
        .then((response) => response.json(),
            (error) => {
                console.log(error);
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            })
        .then((data) => {
            setState(data);
        });
};

export default getMetrics;
