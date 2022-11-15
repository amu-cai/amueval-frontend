import React from 'react';
import {FlexColumn, Svg} from '../../utils/containers';
import styled from 'styled-components';
import theme from '../../utils/theme';
import copyIco from '../../assets/copy_ico.svg';
import {Code} from '../../utils/fonts';

const CodeShellStyle = styled(FlexColumn)`
  position: relative;
  padding: 24px 14px 14px;
  gap: 8px;
  background-color: ${({theme}) => theme.colors.dark07};
  border: 1px solid ${({theme}) => theme.colors.dark};
  border-radius: 4px;
  width: 100%;
  align-items: flex-start;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    gap: 12px;
    padding: 40px 32px 32px;
  }
`;

const CodeShell = (props) => {
    const formatCommand = (command) => {
        if (command[0] === '\t') {
            return <>&nbsp;&nbsp;&nbsp;&nbsp;{formatCommand(command.slice(1))}</>;
            /* eslint-disable */
        } else if (command[0] === '\s') {
            return <>&nbsp;{formatCommand(command.slice(1))}</>;
        } return command;
    };

    const renderCommands = () => {
        return (
            props.commands.map((command, index) => {
                return (
                    <Code key={`command-${props.codeBlockIndex}-${index}`} as='li' 
                          before={!props.disablePrompt}>
                        {formatCommand(command)}
                    </Code>
                );
            })
        );
    };

    return (
        <CodeShellStyle as='ul'>
            <Svg position='absolute' top='12px' right='12px' cursor='pointer'
                 backgroundColor={theme.colors.white} src={copyIco}/>
            {renderCommands()}
        </CodeShellStyle>
    );
};

export default CodeShell;