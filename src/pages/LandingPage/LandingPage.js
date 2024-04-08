import React from 'react';
import Motivation from './components/Motivation/Motivation';
import Csi from './components/Csi/Csi';
import Commercial from './components/Commercial/Commercial';
import Hero from './components/Hero/Hero';
import Partnerships from './components/Partnerships/Partnerships';
import LandingPageStyle from './LandingPageStyle';
import EntireScreenLoading from '../../components/generic/EntireScreenLoading/EntrieScreenLoading';
import { useDispatch } from 'react-redux';
import { loggedBarPositionHandler } from '../../redux/navigationSlice';
import {FlexColumn} from "../../utils/containers";
import Process from "./components/Process";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
    dispatch(loggedBarPositionHandler('100vw'));
  }, [dispatch]);

  if (show) {
    return (
      <LandingPageStyle>
        <Hero />
        <FlexColumn
          gap="150px"
        >
          <Motivation />
          <Commercial />
          <Process />
          <Csi />
          <Partnerships />
        </FlexColumn>
      </LandingPageStyle>
    );
  } else return <EntireScreenLoading />;
};

export default LandingPage;
