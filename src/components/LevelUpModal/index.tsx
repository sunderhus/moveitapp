import React from 'react';
import CloseIcon from '../../assets/icons/close.svg';
import LevelUpIcon from '../../assets/icons/levelup.svg';
import {useChallenge} from '../../hooks/challenge';
import {
  Description,
  ModalCloseButton,
  ModalLevelUp,
  ModalLevelUpNumber,
  Overlay,
  Title,
} from './styles';

const LevelUpModal: React.FC = () => {
  const {level, closeLevelUpModal} = useChallenge();

  return (
    <Overlay>
      <ModalLevelUp source={{uri: '../../assets/icons/levelup.svg'}}>
        <ModalCloseButton onPress={closeLevelUpModal}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalLevelUpNumber style={{position: 'absolute', top: 32}}>
          {level}
        </ModalLevelUpNumber>
        <LevelUpIcon />
        <Title>Parabéns</Title>
        <Description>Você alcançou um novo level</Description>
      </ModalLevelUp>
    </Overlay>
  );
};

export default LevelUpModal;
