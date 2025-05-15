import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { fonts, fontSizes } from '../../theme/fonts';

// Wrapper para o menu
export const ModalWrapper = styled.View`
  flex: 1;
  width: 95%;
`;

// Usando ImageBackground para o fundo do menu (incluindo a barra lateral)
export const MenuBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

// Container para o conteúdo do menu (texto, botões, etc.)
export const ContentContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'ios' ? '40px' : '20px'};
  left: 20px;
  width: 40px;
  height: 40px;
  justifyContent: center;
  alignItems: center;
  zIndex: 10;
  backgroundColor: rgb(201, 201, 201);
  borderRadius: 20px;
  elevation: 5;
`;

export const CloseIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const ProfileContainer = styled.View`
  flexDirection: row;
  alignItems: center;
  marginTop: ${Platform.OS === 'ios' ? '100px' : '70px'};
  marginBottom: 30px;
  paddingLeft: 20px;
`;

export const ProfileTextContainer = styled.View`
  flexDirection: column;
  justifyContent: center;
  marginLeft: 15px;
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  borderRadius: 40px;
  borderWidth: 2px;
  borderColor: rgb(6, 6, 5);
`;

export const UserNameText = styled.Text`
  fontFamily: ${fonts.aller.bold};
  fontSize: ${fontSizes.lg}px;
  color: #333333;
`;

export const UserRoleText = styled.Text`
  fontFamily: ${fonts.aller.regular};
  fontSize: ${fontSizes.sm}px;
  color: rgb(2, 0, 0);
  marginTop: 3px;
`;

export const MenuItemsContainer = styled.ScrollView`
  marginTop: 20px;
  width: 100%;
`;

export const MenuItem = styled.TouchableOpacity`
  flexDirection: row;
  alignItems: center;
  paddingVertical: 15px;
`;

export const MenuItemIcon = styled.Image`
  width: 24px;
  height: 24px;
  marginRight: 15px;
`;

export const MenuItemText = styled.Text`
  fontFamily: ${fonts.aller.regular};
  fontSize: ${fontSizes.md}px;
  color: #333333;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  backgroundColor: #EEEEEE;
`;