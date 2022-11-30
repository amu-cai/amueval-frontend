import {API} from '../utils/globals';

const getUser = (setDataState, setLoadingState) => {
    fetch(`${API}/user-info`)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            setDataState(data);
            if (setLoadingState)
                setLoadingState(false);
        });
};

export default getUser;