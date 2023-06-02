import React from 'react';
import { FlexColumn } from '../../utils/containers';
import Motivation from './components/Motivation/Motivation';
import Csi from './components/Csi/Csi';
import Commercial from './components/Commercial/Commercial';
import Hero from './components/Hero/Hero';
import Partnerships from './components/Partnerships/Partnerships';
import LandingPageStyle from './LandingPageStyle';
import EntireScreenLoading from '../../components/generic/EntireScreenLoading/EntrieScreenLoading';

const LandingPage = (props) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  if (show) {
    return (
      <LandingPageStyle as="main">
        <Hero popUpMessageHandler={props.popUpMessageHandler} />
        <FlexColumn className="LandingPageStyle__main-container">
          <Motivation />
          <Csi />
          <Commercial />
          <Partnerships />
        </FlexColumn>
      </LandingPageStyle>
    );
  } else return <EntireScreenLoading />;
};

export default LandingPage;
