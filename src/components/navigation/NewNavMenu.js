import React from 'react';
import { FlexColumn } from '../../utils/containers';
import theme from '../../utils/theme';
import { NewNavRegular } from '../../utils/fonts';
import logo2 from '../../assets/icons/logo2.svg';
import csiLogo from '../../assets/icons/csi_full_logo_white.svg';
import xIcon from '../../assets/icons/new_x.svg';
import { Svg } from '../../utils/containers';

const NewNavMenu = () => {
  return (
    <FlexColumn
      position="fixed"
      top="0"
      right="0"
      width="340px"
      height="100vh"
      backgroundColor={theme.colors.green700}
      zIndex="3"
      alignmentY="space-between"
      padding="64px 0"
    >
      <FlexColumn
        width="36px"
        height="36px"
        backgroundColor={theme.colors.white100}
        borderRadius="12px"
        position="absolute"
        top="20px"
        right="20px"
      >
        <Svg
          src={xIcon}
          width="22px"
          height="22px"
          backgroundColor={theme.colors.green700}
        />
      </FlexColumn>
      <FlexColumn
        gap="20px"
        width="100%"
        alignmentX="flex-start"
        padding="0 20px"
      >
        <NewNavRegular fontSize="39px" color={theme.colors.grey300}>
          Challenges
        </NewNavRegular>
        <NewNavRegular fontSize="39px" color={theme.colors.grey300}>
          Privacy policy
        </NewNavRegular>
        <NewNavRegular fontSize="39px" color={theme.colors.grey300}>
          Contact
        </NewNavRegular>
      </FlexColumn>
      <FlexColumn gap="28px">
        <img src={logo2} width="290px" height="58px" alt="logo" />
        <NewNavRegular fontSize="45px" color={theme.colors.white100}>
          Made by
        </NewNavRegular>
        <img src={csiLogo} width="256px" height="74px" alt="CSI logo." />
      </FlexColumn>
    </FlexColumn>
  );
};

export default NewNavMenu;
