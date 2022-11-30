import React from 'react';
import {FlexColumn} from '../../utils/containers';
import {H2, Menu} from '../../utils/fonts';
import SubmitInput from '../generic/SubmitInput';
import Button from '../generic/Button';
import theme from '../../utils/theme';
import challengeSubmission from '../../api/challengeSubmissionPost';

const Submit = (props) => {
    const [description, setDescription] = React.useState('');
    const [repoUrl, setRepoUrl] = React.useState('');
    const [repoBranch, setRepoBranch] = React.useState('');

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    const repoUrlHandler = (e) => {
        setRepoUrl(e.target.value);
    };

    const repoBranchHandler = (e) => {
        setRepoBranch(e.target.value);
    };

    const challengeSubmissionSubmit = () => {
        challengeSubmission(props.challengeName, repoUrl, repoBranch, description)
            .then((response) => response.text())
            .then((data) => console.log(data));
        props.popUpMessageHandler('Submit success!', 'Check your entries.');
    };

    return (
        <FlexColumn margin='40px 0 0 0' padding='24px' as='section' gap='64px' maxWidth='624px' width='100%'
                    alignmentX='flex-start'>
            <H2 as='h2' width='100%' textAlign='center'>
                Submit a solution to the challenge
            </H2>
            <FlexColumn width='100%' gap='32px'>
                <SubmitInput label='Submission description' handler={descriptionHandler}/>
                <SubmitInput label='Submission repo URL' handler={repoUrlHandler}/>
                <SubmitInput label='Submission repo branch' handler={repoBranchHandler}/>
            </FlexColumn>
            <Button width='122px' height='44px' handler={challengeSubmissionSubmit}>
                <Menu color={theme.colors.white}>
                    Submit
                </Menu>
            </Button>
        </FlexColumn>
    );
};

export default Submit;