const getChallengeInfo = (setDataState, setLoadingState, challengeTitle) => {
    fetch(`http://localhost:8000/challenges/challenge/${challengeTitle}`)
        .then(response => response.json())
        .then(data => {
            setDataState(data);
            if (setLoadingState)
                setLoadingState(false);
        });
};

export default getChallengeInfo;