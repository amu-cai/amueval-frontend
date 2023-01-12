import { FlexColumn, FlexRow } from '../utils/containers';
import React from 'react';
import styled from 'styled-components';
import { Body, H1, H2, Medium } from '../utils/fonts';
import CircleNumber from '../components/generic/CircleNumber';
import Button from '../components/generic/Button';
import theme from '../utils/theme';
import KeyCloakService from '../services/KeyCloakService';
import { ROOT_URL } from '../utils/globals';

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

const PolicyPrivacy = () => {
  const listItemsContent = [
    'prawo dostępu do danych osobowych, w tym prawo do uzyskania kopii tych danych przysługuje w ramach przesłanek i na warunkach określonych w art. 15 RODO,',
    'prawo do żądania sprostowania (poprawienia) danych osobowych przysługuje w ramach przesłanek i na warunkach określonych w art. 16 RODO,',
    'prawo do usunięcia danych - przysługuje w ramach przesłanek i na warunkach określonych w art. 17 RODO,',
    'prawo ograniczenia przetwarzania - przysługuje w ramach przesłanek i na warunkach określonych w art. 18 RODO,',
    'prawo wniesienia sprzeciwu wobec przetwarzania - przysługuje w ramach przesłanek i na warunkach określonych w art. 21 RODO,',
    'prawo do przenoszenia danych osobowych - przysługuje w ramach przesłanek i na warunkach określonych w art. 20 RODO,',
    'prawo wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych),',
  ];

  const renderButtons = () => {
    return (
      <FlexRow margin="32px 0 0 0" gap="48px" width="90%">
        <Button
          handler={() => {
            localStorage.setItem('privacyPolicy', 'accept');
            KeyCloakService.doLogin();
          }}
          width="72px"
          height="32px"
        >
          Accept
        </Button>
        <Button
          width="72px"
          height="32px"
          handler={() => {
            localStorage.removeItem('privacyPolicy');
            window.location.replace(ROOT_URL);
          }}
          backgroundColor={theme.colors.dark}
        >
          Reject
        </Button>
      </FlexRow>
    );
  };

  return (
    <PolicyPrivacyStyle as="main">
      <FlexColumn className="main-container">
        <H1 as="h1">Klauzula informacyjna</H1>
        <Body as="p">
          Zgodnie z art. 13 Rozporządzenia Parlamentu Europejskiego i Rady (UE)
          2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych
          w związku z przetwarzaniem danych osobowych i w sprawie swobodnego
          przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
          rozporządzenie o ochronie danych), Uniwersytet im. Adama Mickiewicza w
          Poznaniu informuje, iż:
        </Body>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">1. Administrator</H2>
          <Body>
            Administratorem Pani/Pana danych osobowych jest Uniwersytet im.
            Adama Mickiewicza w Poznaniu z siedzibą przy ul. H. Wieniawskiego 1,
            61-712 Poznań.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">2. Inspektor Ochrony Danych</H2>
          <Body as="p">
            Administrator danych wyznaczył Inspektora Ochrony Danych - kontakt
            mailowy&nbsp;
            <Medium as="a" cursor="pointer" href="mailto:iod@amu.edu.pl">
              iod@amu.edu.pl
            </Medium>
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">3. Cel i podstawa prawna przetwarzania</H2>
          <Body as="p">
            Pani/Pana dane osobowe przetwarzane będą w celu założenia konta
            użytkownika i umożliwienia korzystania z platformy gonito, a także w
            celu kontaktowania się ze zwycięzcami konkursów, na podstawie
            wyrażonej przez Panią/Pana zgody, stosownie do art. 6 ust. 1 lit. a
            RODO.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">4. Okres przechowywania danych</H2>
          <Body as="p">
            Pani/Pana dane osobowe przetwarzane będą przez okres niezbędny do
            czasu realizacji celu dla jakiego zostały zebrane lub do momentu
            cofnięcia zgody na przetwarzanie danych osobowych/wniesienia
            sprzeciwu wobec przetwarzania, w zależności od tego co nastąpi
            wcześniej.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">5. Odbiorcy danych</H2>
          <Body as="p">
            Odbiorcami Pani/Pana danych osobowych mogą być podmioty, którym
            Administrator zleca wykonanie określonych czynności, z którymi wiąże
            się konieczność przetwarzania danych osobowych (podmioty
            przetwarzające), w szczególności operatorzy systemów
            informatycznych, operatorzy systemów e-mail, kancelarie prawne i
            audytorskie.
          </Body>
          <Body as="p">
            Pani/Pana dane osobowe mogą być także udostępnione podmiotom
            uprawnionym na podstawie przepisów prawa.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">6. Prawa związane z przetwarzaniem danych</H2>
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
          <H2 as="h2">7. Cofnięcie zgody na przetwarzanie danych</H2>
          <Body as="p">
            Prawo do cofnięcia zgody na przetwarzanie danych osobowych (w
            stosunku do danych osobowych które są przetwarzane na podstawie
            Pani/Pana zgody - ma Pan/Pani prawo w dowolnym momencie wycofać
            zgodę na przetwarzanie danych osobowych. Wycofanie zgody nie wpływa
            na zgodność z prawem przetwarzania, którego dokonano na podstawie
            zgody przed jej wycofaniem. Wycofać zgodę może Pani/Pan poprzez
            przesłanie wiadomości na skrzynkę mailową:&nbsp;
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
          <H2 as="h2">8. Obowiązek podania danych i konsekwencje niepodania</H2>
          <Body as="p">
            Podanie danych osobowych zbieranych na podstawie zgody jest
            dobrowolne, ale niezbędne do realizacji celu do jakiego zostały
            zebrane.
          </Body>
        </FlexColumn>
        <FlexColumn as="section" alignmentX="flex-start" gap="16px">
          <H2 as="h2">
            9. Profilowanie i zautomatyzowane podejmowanie decyzji
          </H2>
          <Body as="p">
            W odniesieniu do Pani/Pana danych osobowych, decyzje nie będą
            podejmowane w sposób zautomatyzowany i nie będą poddawane
            profilowaniu, stosownie do art. 22 RODO.
          </Body>
        </FlexColumn>
        {renderButtons()}
      </FlexColumn>
    </PolicyPrivacyStyle>
  );
};

export default PolicyPrivacy;
