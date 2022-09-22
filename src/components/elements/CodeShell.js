import React from 'react';
import {FlexColumn, Svg} from '../../utils/containers';
import styled from 'styled-components';
import theme from '../../utils/theme';
import copyIco from '../../assets/copy_ico.svg';

const CodeShellStyle = styled(FlexColumn)`
  position: relative;
  padding: 40px 32px 32px;
  gap: 12px;
  background-color: ${({theme}) => theme.colors.dark07};
  border: 1px solid ${({theme}) => theme.colors.dark};
  border-radius: 4px;
  width: 100%;
  align-items: flex-start;
`;

const CodeShell = (props) => {
    return (
        <CodeShellStyle>
            <Svg position='absolute' top='12px' right='12px' cursor='pointer'
                 backgroundColor={theme.colors.white} src={copyIco}/>
            {props.children}
        </CodeShellStyle>
    );
};

export default CodeShell;