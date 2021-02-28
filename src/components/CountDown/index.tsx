import React from 'react';
import {View} from 'react-native';
import LevelIcon from '../../assets/icons/level.svg';
import {Colors} from '../../styles/global';
import {
  Container,
  CountdownButton,
  CountdownButtonText,
  CountdownCard,
  CountdownCardsGroup,
  CountdownSeparator,
  ICountDownButtonDisabledProps,
  Line,
} from './styles';

const Countdown: React.FC = () => {
  const minutes = 25 * 60;
  const seconds = minutes % 60;
  const hasFinished = false;
  const isActive = false;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <View>
      <Container>
        <CountdownCardsGroup>
          <CountdownCard>{minuteLeft}</CountdownCard>
          <Line />
          <CountdownCard>{minuteRight}</CountdownCard>
        </CountdownCardsGroup>

        <CountdownSeparator>:</CountdownSeparator>

        <CountdownCardsGroup>
          <CountdownCard>{secondLeft}</CountdownCard>
          <Line />
          <CountdownCard>{secondRight}</CountdownCard>
        </CountdownCardsGroup>
      </Container>

      {hasFinished ? (
        <ICountDownButtonDisabledProps borderColor={`${Colors.green}`}>
          <CountdownButtonText customColor={`${Colors.title}`}>
            Ciclo encerrado
          </CountdownButtonText>
          <LevelIcon style={{marginLeft: 16}} />
        </ICountDownButtonDisabledProps>
      ) : (
        <>
          {isActive ? (
            <CountdownButton backgroundVariation={`${Colors.red}`}>
              <CountdownButtonText customColor={`${Colors.white}`}>
                Abandonar ciclo
              </CountdownButtonText>
            </CountdownButton>
          ) : (
            <CountdownButton backgroundVariation={`${Colors.blue}`}>
              <CountdownButtonText customColor={`${Colors.white}`}>
                Iniciar ciclo
              </CountdownButtonText>
            </CountdownButton>
          )}
        </>
      )}
    </View>
  );
};

export default Countdown;
