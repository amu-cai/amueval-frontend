import React from 'react';
import { FlexColumn, FlexRow, Svg } from '../../utils/containers';
import Logo from '../generic/Logo';
import { NewNavRegular } from '../../utils/fonts';
import theme from '../../utils/theme';
import newMenuButton from '../../assets/icons/new_menu_button.svg';

const LandingPageNavBar = () => {
  return (
    <FlexColumn
      width="100%"
      height="64px"
      position="fixed"
      top="0"
      left="0"
      backgroundColor={theme.colors.white100}
      zIndex="2"
      alignmentX="space-between"
    >
      <FlexColumn width="100%" height="100%">
        <FlexRow alignmentX="space-between" width="100%" padding="0 60px">
          <Logo width="180px" height="35px" margin="0 0 1px 0" />
          <FlexRow gap="40px" margin="0 0 1px 0">
            <NewNavRegular as="a" href="#" cursor="pointer">
              Motivation
            </NewNavRegular>
            <NewNavRegular as="a" href="#" cursor="pointer">
              Challenges
            </NewNavRegular>
            <NewNavRegular as="a" href="#" cursor="pointer">
              Notification process
            </NewNavRegular>
            <NewNavRegular as="a" href="#" cursor="pointer">
              Partners
            </NewNavRegular>
          </FlexRow>
          <FlexRow gap="20px">
            <NewNavRegular
              borderRadius="20px"
              border={`2px solid ${theme.colors.green700}`}
              color={theme.colors.black700}
              letterSpacing="0.04em"
              padding="6px 34px 7px"
            >
              Sign in
            </NewNavRegular>
            <Svg
              src={newMenuButton}
              width="36px"
              height="36px"
              backgroundColor={theme.colors.green500}
            />
          </FlexRow>
        </FlexRow>
      </FlexColumn>
      <FlexRow
        width="calc(100% - 304px)"
        height="1px"
        backgroundColor={theme.colors.black700}
      />
    </FlexColumn>
  );
};

export default LandingPageNavBar;
