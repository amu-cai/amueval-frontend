import React from 'react';
import styled from 'styled-components';
import {Container} from '../../utils/containers';
import PropsTypes from 'prop-types';
import {CircularProgress} from "@mui/material";
import theme from "../../utils/theme";

const SpinnerContainer = styled(Container)`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    height: 350px;
  }
`;

const Loading = (props) => {
    return (
        <>
            {props.visible ?
                <SpinnerContainer>
                <CircularProgress
                    size="60px"
                    sx={() => ({
                        color: theme.colors.green700,
                    })}
                />
            </SpinnerContainer> : ''}
        </>
    );
};

Loading.propTypes = {
    visible: PropsTypes.bool,
};

Loading.defaultProps = {
    visible: true,
};

export default Loading;