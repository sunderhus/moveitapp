import React from 'react';
import LevelIcon from '../../assets/icons/level.svg';
import {useChallenge} from '../../hooks/challenge';
import {
  Level,
  ProfileContainer,
  ProfileImage,
  ProfileInfos,
  ProfileLevelContainer,
  ProfileName,
} from './styles';

const Profile: React.FC = () => {
  const {level} = useChallenge();

  return (
    <ProfileContainer>
      <ProfileImage
        source={{uri: 'https://github.com/sunderhus.png', cache: 'default'}}
      />
      <ProfileInfos>
        <ProfileName>Matheus Sunderhus</ProfileName>
        <ProfileLevelContainer>
          <LevelIcon />
          <Level>{`level ${level}`}</Level>
        </ProfileLevelContainer>
      </ProfileInfos>
    </ProfileContainer>
  );
};

export default Profile;
