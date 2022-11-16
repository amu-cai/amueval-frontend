import React from 'react';
import {FlexColumn} from '../../utils/containers';
import theme from '../../utils/theme';
import {Body, H3} from '../../utils/fonts';
import Button from './Button';


const PopupMessage = (props) => {
    return (
        <FlexColumn position='fixed' top='0' left='0' zIndex='100'
                    width='100%' height='100vh' backgroundColor={theme.colors.dark01}>
            <FlexColumn alignmentY='space-between' width='40%' height='50%' borderRadius='12px'
                        backgroundColor={theme.colors.white} padding='56px' border={`4px solid ${theme.colors.green}`}>
                <FlexColumn gap='48px'>
                    <H3>
                        {props.header}
                    </H3>
                    <Body>
                        {props.message}
                    </Body>
                </FlexColumn>
                <Button handler={() => props.popUpMessageHandler('', '')}>
                    Ok
                </Button>
            </FlexColumn>
        </FlexColumn>
    );
};

export default PopupMessage;