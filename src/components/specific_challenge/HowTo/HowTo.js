import React from 'react';
import {FlexColumn} from '../../../utils/containers';
import {IS_MOBILE} from '../../../utils/globals';
import Media from 'react-media';
import GetChallengeRepo from './sections/GetChallengeRepo';
import WorkOnYourSolution from './sections/WorkOnYourSolution';
import PushYourSolution from './sections/PushYourSolution';
import SubmissionMetadataSmallDesktop from './sections/SubmissionMetadataSmallDesktop';
import SubmissionMetadataLargeDesktop from './sections/SubmissionMetadataLargeDesktop';
import SubmitSolutionToGonito from './sections/SubmitSolutionToGonito';

const HowTo = (props) => {
    return (
        <FlexColumn margin={IS_MOBILE() ? null : '64px 0 0 0'} padding={IS_MOBILE() ? '12px 20px' : null}
                    gap={IS_MOBILE() ? '24px' : '48px'} alignmentX={IS_MOBILE() ? 'flex-start' : 'center'}
                    maxWidth={IS_MOBILE() ? '668px' : 'none'}>
            <FlexColumn maxWidth='680px' alignmentX='flex-start' gap='48px'>
                <GetChallengeRepo user={props.user} challengeName={props.challengeName}/>
                <WorkOnYourSolution/>
                <PushYourSolution challengeName={props.challengeName}/>
            </FlexColumn>
            <FlexColumn as='article'>
                <SubmitSolutionToGonito/>
                <Media query='(max-width: 1224px)'>
                    <SubmissionMetadataSmallDesktop/>
                </Media>
                <Media query='(min-width: 1225px)'>
                    <SubmissionMetadataLargeDesktop/>
                </Media>
            </FlexColumn>
        </FlexColumn>
    );
};

export default HowTo;