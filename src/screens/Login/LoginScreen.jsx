import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ScrollContainer,
  ContentContainer,
  IconContainer,
  ConeIcon,
  TitleContainer,
  TitleText,
  YellowTitle,
  LoginButton,
  ButtonText,
  InfoText,
  BoldText,
  SystemNameText,
  WebsiteText,
  FooterImage
} from './styles';
import Background from '../../components/Background';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <Background>
    <Container transparent>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollContainer>
        <ContentContainer>
          <IconContainer>
            <ConeIcon 
              source={require('../../assets/images/cone_icon.png')} 
              resizeMode="contain"
            />
          </IconContainer>
          
          <TitleContainer>
            <TitleText>SISTEMA DE</TitleText>
            <YellowTitle>CONTROLE DE</YellowTitle>
            <YellowTitle>OBRAS DE</YellowTitle>
            <YellowTitle>FERROVIAS</YellowTitle>
          </TitleContainer>
          
          <LoginButton onPress={handleLogin}>
            <ButtonText>ENTRAR COM <BoldText>GOV.BR</BoldText></ButtonText>
          </LoginButton>
          
          <InfoText>
            Entre com o <BoldText>gov.br</BoldText> e acesse todas as aplicações do
          </InfoText>
          <SystemNameText>
            Sistema de Controle de Obras de Ferrovias
          </SystemNameText>
          
          <WebsiteText>www.scof.com</WebsiteText>
          
          <FooterImage 
            source={require('../../assets/images/railway_tracks.png')} 
            resizeMode="contain"
          />
        </ContentContainer>
      </ScrollContainer>
    </Container>
    </Background>
  );
};

export default LoginScreen;