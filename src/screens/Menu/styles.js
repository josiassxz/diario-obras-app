import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { fonts, fontSizes } from '../../theme/fonts';

// Definindo um "wrapper" para o menu e a barra juntos
export const ModalWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.95);
  width: 85%; 
`;

// Container para a barra vertical que ficará no lado direito
export const SideBarContainer = styled.View`
  width: 15%;
  height: 15%;
  background-color: transparent;
`;

export const SideBar = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'ios' ? '40px' : '20px'};
  left: 20px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgb(201, 201, 201);
  border-radius: 20px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const CloseIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;  
  align-items: center;  
  margin-top: ${Platform.OS === 'ios' ? '100px' : '70px'};
  margin-bottom: 30px;
  padding-left: 20px;
`;

export const ProfileTextContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 2px;
  border-color: rgb(6, 6, 5);
`;

export const UserNameText = styled.Text`
  font-family: ${fonts.aller.bold};
  font-size: ${fontSizes.lg}px;
  color: #333333;`;

export const UserRoleText = styled.Text`
  font-family: ${fonts.aller.regular};
  font-size: ${fontSizes.sm}px;
  color: rgb(2, 0, 0);
  margin-top: 3px;
`;

export const MenuItemsContainer = styled.ScrollView`
  margin-top: 20px;
  width: 100%;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: 15px;
`;

export const MenuItemIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

export const MenuItemText = styled.Text`
  font-family: ${fonts.aller.regular};
  font-size: ${fontSizes.md}px;
  color: #333333;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: #EEEEEE;
`;