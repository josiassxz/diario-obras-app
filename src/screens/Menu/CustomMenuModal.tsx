import React from 'react';
import { View, Modal, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
import {
  ModalWrapper,
  MenuBackground,
  ContentContainer,
  CloseButton,
  CloseIcon,
  ProfileContainer,
  ProfileImage,
  ProfileTextContainer,
  UserNameText,
  UserRoleText,
  MenuItemsContainer,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
} from './styles';

// Componente para linha tracejada diretamente incorporado
const DashedDivider = () => {
  return (
    <View style={{ 
      flexDirection: 'row', 
      alignItems: 'center',
      marginVertical: 2,
      width: '100%',
    }}>
      {Array.from({ length: 40 }).map((_, index) => (
        <View 
          key={index} 
          style={{
            width: 5,
            height: 1,
            backgroundColor: '#CCCCCC',
            marginHorizontal: 2,
          }}
        />
      ))}
    </View>
  );
};

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
          {/* Menu com imagem de fundo (incluindo a barra lateral) */}
          <MenuBackground 
            source={require('../../assets/images/menu.png')} 
            resizeMode="stretch"
          >
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
                  <MenuItemIcon source={require('../../assets/images/perfil.png')} />
                  <MenuItemText>Dados do usuário</MenuItemText>
                </MenuItem>
                <DashedDivider />
                
                <MenuItem onPress={() => handleNavigate('CadastroTrechos')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/trechos-ferrovias.png')} />
                  <MenuItemText>Cadastro de informações dos trechos</MenuItemText>
                </MenuItem>
                <DashedDivider />
                
                <MenuItem onPress={() => handleNavigate('RelatoriosTrechos')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/relatorios.png')} />
                  <MenuItemText>Relatórios dos trechos cadastrados</MenuItemText>
                </MenuItem>
                <DashedDivider />
                
                <MenuItem onPress={() => handleNavigate('DiarioObra')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/diario-de-obra.png')} />
                  <MenuItemText>Relatório Diário de Obra</MenuItemText>
                </MenuItem>
                <DashedDivider />
                
                <MenuItem onPress={() => handleNavigate('Configuracoes')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/configuracoes.png')} />
                  <MenuItemText>Configurações</MenuItemText>
                </MenuItem>
                <DashedDivider />
                
                <MenuItem onPress={() => handleNavigate('Ajuda')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/ajuda.png')} />
                  <MenuItemText>Ajuda</MenuItemText>
                </MenuItem>
                <DashedDivider />
                
                <MenuItem onPress={() => handleNavigate('Login')} activeOpacity={0.7}>
                  <MenuItemIcon source={require('../../assets/images/sair.png')} />
                  <MenuItemText>Sair</MenuItemText>
                </MenuItem>
              </MenuItemsContainer>
            </ContentContainer>
          </MenuBackground>
        </ModalWrapper>
      </Background>
    </Modal>
  );
};

export default CustomMenuModal;