import React from 'react';
import {FlexColumn} from '../../utils/containers';
import {H2} from '../../utils/fonts';
import getMyEntries from '../../api/getMyEntries';

const MyEntries = (props) => {
    /* eslint-disable */
    const [myEntriesFromAPI, setMyEntriesFromAPI] = React.useState([]);
    /* eslint-disable */
    const [myEntries, setMyEntries] = React.useState([]);
    /* eslint-disable */
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        challengesRequest();
    }, []);

    const challengesRequest = () => {
        getMyEntries(props.challengeName, setMyEntriesFromAPI);
        getMyEntries(props.challengeName, setMyEntries, setLoading);
    };

    return (
        <FlexColumn padding='24px' as='section'>
            <H2 as='h2'>
                My entries
            </H2>
            {/*{myEntries.map((entry, index) => {*/}
            {/*    */}
            {/*})}*/}
        </FlexColumn>
    );
};

export default MyEntries;