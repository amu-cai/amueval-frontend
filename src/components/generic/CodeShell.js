import React from 'react';
import { FlexColumn, Svg } from '../../utils/containers';
import styled from 'styled-components';
import theme from '../../utils/theme';
import copyIco from '../../assets/copy_ico.svg';
import checkIco from '../../assets/check_ico.svg';
import { Body, Code } from '../../utils/fonts';

const CodeShellStyle = styled(FlexColumn)`
  position: relative;
  padding: 24px 14px 14px;
  gap: ${({ gap }) => (gap ? gap : '8px')};
  background-color: ${({ theme }) => theme.colors.dark07};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 4px;
  width: 100%;
  align-items: flex-start;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'none')};

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    gap: ${({ gap }) => (gap ? gap : '12px')};
    padding: 40px 32px 32px;
  }
`;

const CopiedMessageStyle = styled(Body)`
  font-size: 16px;
  position: absolute;
  top: -24px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 6px;
`;

const CodeShell = (props) => {
  const [ico, setIco] = React.useState(copyIco);

  const clickCopyButton = () => {
    let commands = '';
    if (props.commands.length > 1) {
      for (let command of props.commands) commands += command + '\n';
    } else commands = props.commands;
    navigator.clipboard.writeText(commands).then((r) => console.log(r));
    setIco(checkIco);
    setTimeout(() => {
      setIco(copyIco);
    }, 2000);
  };

  const formatCommand = (command) => {
    if (command[0] === '\t') {
      return <>&nbsp;&nbsp;&nbsp;&nbsp;{formatCommand(command.slice(1))}</>;
    }
    return command;
  };

  const renderCommands = () => {
    return props.commands.map((command, index) => {
      return (
        <Code
          key={`command-${props.codeBlockIndex}-${index}`}
          as="li"
          before={!props.disablePrompt}
        >
          {formatCommand(command)}
        </Code>
      );
    });
  };

  return (
    <CodeShellStyle as="ul" gap={props.gap} maxWidth={props.maxWidth}>
      <Svg
        position="absolute"
        top="12px"
        right="12px"
        cursor="pointer"
        backgroundColor={theme.colors.white}
        src={ico}
        onClick={clickCopyButton}
      />
      {ico === checkIco ? <CopiedMessageStyle>copied!</CopiedMessageStyle> : ''}
      {renderCommands()}
    </CodeShellStyle>
  );
};

export default CodeShell;
