import React from 'react';
import { Modal, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
import {
  ModalWrapper,
  ModalContainer,
  SideBarContainer,
  SideBar,
  CloseButton,
  CloseIcon,
  ContentContainer,
  ProfileContainer,
  ProfileImage,
  ProfileTextContainer,
  UserNameText,
  UserRoleText,
  MenuItemsContainer,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  Divider
} from './styles';

// Definindo a interface de props para o componente
interface CustomMenuModalProps {
  visible: boolean;
  onClose: () => void;
}

const CustomMenuModal: React.FC<CustomMenuModalProps> = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const handleNavigate = (screen: string) => {
    console.log(`Navegando para: ${screen}`);
    // Fechar o menu antes de navegar
    onClose();
    // Pequeno atraso para garantir que o menu foi fechado
    setTimeout(() => {
      navigation.navigate(screen as never);
    }, 100);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Background>
        <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
        
        <ModalWrapper>
          {/* Conteúdo do menu */}
          <ModalContainer>
            <ContentContainer>
              <CloseButton onPress={onClose} activeOpacity={0.7}>
                <CloseIcon source={require('../../assets/images/fechar.png')} />
              </CloseButton>
              
              <ProfileContainer>
                <ProfileImage source={require('../../assets/images/avatar.png')} />
                <ProfileTextContainer>
                  <UserNameText>Nome do Usuário Logado</UserNameText>
                  <UserRoleText>Engenheiro</UserRoleText>
                </ProfileTextContainer>
              </ProfileContainer>
              
              <MenuItemsContainer>
                <MenuItem onPress={() => handleNavigate('Dashboard')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/dashboard.png')} />
                  <MenuItemText>Dashboard</MenuItemText>
                </MenuItem>
                <Divider />
                
                <MenuItem onPress={() => handleNavigate('CadastroTrechos')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/trechos-ferrovias.png')} />
                  <MenuItemText>Cadastro de informações dos trechos</MenuItemText>
                </MenuItem>
                <Divider />
                
                <MenuItem onPress={() => handleNavigate('RelatoriosTrechos')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/relatorios.png')} />
                  <MenuItemText>Relatórios dos trechos cadastrados</MenuItemText>
                </MenuItem>
                <Divider />
                
                <MenuItem onPress={() => handleNavigate('DiarioObra')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/diario-de-obra.png')} />
                  <MenuItemText>Relatório Diário de Obra</MenuItemText>
                </MenuItem>
                <Divider />
                
                <MenuItem onPress={() => handleNavigate('Configuracoes')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/configuracoes.png')} />
                  <MenuItemText>Configurações</MenuItemText>
                </MenuItem>
                <Divider />
                
                <MenuItem onPress={() => handleNavigate('Ajuda')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/ajuda.png')} />
                  <MenuItemText>Ajuda</MenuItemText>
                </MenuItem>
                <Divider />
                
                <MenuItem onPress={() => handleNavigate('Login')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/sair.png')} />
                  <MenuItemText>Sair</MenuItemText>
                </MenuItem>
              </MenuItemsContainer>
            </ContentContainer>
          </ModalContainer>
          

        </ModalWrapper>
      </Background>
    </Modal>
  );
};

export default CustomMenuModal;