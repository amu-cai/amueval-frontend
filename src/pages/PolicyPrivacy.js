import { FlexColumn, FlexRow } from '../utils/containers';
import React from 'react';
import styled from 'styled-components';
import { Body, H1, H2, Medium } from '../utils/fonts';
import CircleNumber from '../components/generic/CircleNumber';
import Button from '../components/generic/Button';
import KeyCloakService from '../services/KeyCloakService';

const PolicyPrivacyStyle = styled(FlexColumn)`
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 90px 0 32px;

  .main-container {
    align-items: flex-start;
    max-width: 452px;
    gap: 16px;
    width: 80%;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    padding: 172px 0 124px;

    .main-container {
      max-width: 680px;
      gap: 24px;
    }
  }
`;

const PolicyPrivacy = (props) => {
  React.useEffect(() => {
    const privacyPolicyAccept = localStorage.getItem('privacyPolicy');
    if (privacyPolicyAccept !== 'accept') {
      props.popUpMessageHandler(
        'Policy privacy',
        'Please read the service policy below and accept its terms and conditions to create an account using the button at the bottom of the page.'
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listItemsContent = [
    'The right of access to personal data, including the right to obtain a copy of that data, is granted under the grounds and conditions set out in Article 15 of the RODO,',
    'The right to request the rectification (amendment) of personal data shall be exercised within the grounds and under the conditions set out in Article 16 RODO,',
    'The right to erasure - shall be exercised within the grounds and under the conditions set out in Article 17 of the RODO,',
    'The right to restrict processing - is available under the grounds and conditions set out in Article 18 RODO,',
    'The right to object to processing - you have the right to object within the grounds and under the conditions set out in Article 21 RODO,',
    'The right to data portability - you have the right to data portability under the grounds and conditions set out in Article 20 of the RODO,',
    'The right to lodge a complaint with the supervisory authority (President of the Office for Personal Data Protection),',
  ];

  const doRegister = () => {
    localStorage.setItem('privacyPolicy', 'accept');
    KeyCloakService.doRegister();
  };

  const doLogin = () => {
    localStorage.setItem('privacyPolicy', 'accept');
    KeyCloakService.doLogin();
  };

  const renderButtons = () => {
    let acceptHandler = null;
    let buttonHandler = null;
    if (props.beforeLogin) buttonHandler = doLogin;
    if (props.beforeRegister) {
      acceptHandler = () => doRegister;
      buttonHandler = () => {
        props.popUpMessageHandler(
          'Reminder',
          'Remember to check your spam mailbox to confirm your account.',
          acceptHandler
        );
      };
    }
    if (props.beforeLogin || props.beforeRegister) {
      return (
        <FlexRow margin="32px 0 0 0" gap="48px" width="90%">
          <Button handler={buttonHandler} width="72px" height="32px">
            Accept
          </Button>
        </FlexRow>
      );
    }
  };

  return (
    <PolicyPrivacyStyle as="main">
      <FlexColumn className="main-container">
        <H1 as="h1">Information clause</H1>
        <Body as="p">
          Pursuant to Article 13 of Regulation (EU) 2016/679 of the European
          Parliament and of the Council of 27 April 2016 on the protection of
          natural persons with regard to the processing of personal data and on
          the free movement of such data and repealing Directive 95/46/EC
          (General Data Protection Regulation), Adam Mickiewicz University of
          Poznan informs you that:
        </Body>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">1. Administrator</H2>
          <Body>
            The administrator of your personal data is the Adam Mickiewicz
            University in Poznań with its seat at H. Wieniawskiego 1, 61-712
            Poznań.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">2. Data Protection Officer</H2>
          <Body as="p">
            The data controller has appointed a Data Protection Officer - email
            contact&nbsp;
            <Medium as="a" cursor="pointer" href="mailto:iod@amu.edu.pl">
              iod@amu.edu.pl
            </Medium>
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">3. Purpose and legal basis of processing</H2>
          <Body as="p">
            Your personal data will be processed in order to set up your user
            account and enable you to use the gonito platform, as well as to
            contact the winners of the competitions, based on your consent,
            pursuant to Article 6(1)(a) of the RODO.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">4. Data retention period</H2>
          <Body as="p">
            Your personal data will be processed for the period necessary until
            the purpose for which it was collected has been fulfilled or until
            you withdraw your consent to the processing of your personal
            data/objection to the processing, whichever comes first.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">5. Recipients of the data</H2>
          <Body as="p">
            The recipients of your personal data may be entities to which the
            Administrator subcontracts certain activities that require the
            processing of personal data (processors), in particular IT system
            operators, e-mail system operators, law firms and auditing firms.
          </Body>
          <Body as="p">
            Your personal data may also be made available to entities authorised
            by law.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">6. Rights in relation to data processing</H2>
          <FlexColumn
            as="ol"
            margin="0"
            padding="0"
            gap="12px"
            alignmentX="flex-start"
          >
            {listItemsContent.map((item, index) => {
              return (
                <FlexRow
                  alignmentX="flex-start"
                  alignmentY="flex-start"
                  key={`privacy-policy-item-${index}`}
                  width="100%"
                  privacyPolicy
                  gap="16px"
                >
                  <CircleNumber
                    margin="6px 0 0 0"
                    fontSize="16px"
                    width="24px"
                    height="24px"
                    number={String(index + 1)}
                  />
                  <Body width="80%" as="li">
                    {item}
                  </Body>
                </FlexRow>
              );
            })}
          </FlexColumn>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">7. Withdrawal of consent to data processing</H2>
          <Body as="p">
            Right to withdraw consent to the processing of personal data (in
            relation to personal data that is processed on the basis of your
            consent - you have the right to withdraw your consent to the
            processing of personal data at any time. The withdrawal of consent
            does not affect the lawfulness of the processing that was carried
            out on the basis of consent before its withdrawal. You can withdraw
            your consent by sending an email to:&nbsp;
            <Medium
              as="a"
              cursor="pointer"
              href="mailto:gonito-rodo@wmi.amu.edu.pl"
            >
              gonito-rodo@wmi.amu.edu.pl
            </Medium>
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">
            8. Obligation to provide data and consequences of failure to do so
          </H2>
          <Body as="p">
            The provision of personal data collected on the basis of consent is
            voluntary, but necessary to fulfil the purpose for which it was
            collected.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">9. Profiling and automated decision-making</H2>
          <Body as="p">
            With regard to your personal data, decisions will not be taken by
            automated means and will not be subject to profiling, pursuant to
            Article 22 of the RODO.
          </Body>
        </FlexColumn>
        {renderButtons()}
      </FlexColumn>
    </PolicyPrivacyStyle>
  );
};

export default PolicyPrivacy;
