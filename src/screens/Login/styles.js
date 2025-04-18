import styled from 'styled-components/native';
import { fonts, fontSizes } from '../../theme/fonts';

// Componentes estilizados
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.transparent ? 'transparent' : '#FFFFFF'};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 24px 24px;
  align-items: center;
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 5px;
  right: 60px;
  z-index: 1;
`;

export const ConeIcon = styled.Image`
  width: 70px;
  height: 70px;
  transform: rotate(5deg);
`;


export const TitleContainer = styled.View`
  align-self: stretch;
  margin-top: 20px;
  margin-bottom: 30px;
`;


export const TitleText = styled.Text`
  font-family: ${fonts.aller.regular};
  font-size: ${fontSizes.xxl * 1.9}px;
  color: #000000;
  text-align: left;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
`;

export const YellowTitle = styled.Text`
  font-family: ${fonts.aller.bold};
  font-size: ${fontSizes.xxl * 1.9}px;
  color: #FFCC33;
  text-align: left;
  text-shadow: 1px 1px 0 #00000033;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 60%;
  background-color: #FFCC33;
  border-radius: 1px;
  padding: 10px;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.aller.regular};
  font-size: ${fontSizes.md}px;
  color: #333333;
  text-transform: uppercase;
`;

export const InfoText = styled.Text`
  font-family: ${fonts.aller.regular};
  font-size: ${fontSizes.md}px;
  color: #333333;
  align-self: stretch;
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.8);
`;

export const BoldText = styled.Text`
  font-family: ${fonts.aller.bold};
`;

export const SystemNameText = styled.Text`
  font-family: ${fonts.aller.bold};
  font-size: ${fontSizes.lg}px;
  color: #1A2438;
  margin-bottom: 10px;
  align-self: stretch;
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.8);
`;

export const WebsiteText = styled.Text`
  font-family: ${fonts.aller.regular};
  font-size: ${fontSizes.md}px;
  color: #333333;
  margin-top: 10px;
  align-self: stretch;
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.8);
`;

export const FooterImage = styled.Image`
  width: 120%;
  height: 375px;
  margin-top: 3px;
  margin-bottom: 30px;
`;