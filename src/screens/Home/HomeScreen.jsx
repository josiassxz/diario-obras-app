import React from 'react';
import { StatusBar, Image, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
import {
  DividerContainer,
  DividerImage,
  Container,
  Header,
  MenuButton,
  MenuLine,
  MainImageContainer,
  MainImage,
  WarningBorderTop,
  WarningBorderBottom,
  WarningIcon,
  ConeIcon,
  OptionsContainer,
  OptionRow,
  OptionButton,
  OptionIcon,
  OptionText,
  BottomNavBar,
  NavButton,
  NavIcon,
  NavText,
  BottomWarningIcon
} from './styles.js';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Background>
    <Container transparent>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Menu de hambúrguer */}
      <Header>
        <MenuButton>
          <MenuLine />
          <MenuLine />
          <MenuLine />
        </MenuButton>
      </Header>
      
      {/* Imagem principal com aviso */}
      <MainImageContainer>
        <MainImage 
          source={require('../../assets/images/tela-logado.png')} 
          resizeMode="cover"
        />
      </MainImageContainer>
      
      {/* Botões de opções */}
      <OptionsContainer>
        <OptionRow>
          <OptionButton>
            <OptionIcon 
              source={require('../../assets/images/trechos-ferrovias.png')} 
            />
            <OptionText>Cadastro de informações dos trechos</OptionText>
          </OptionButton>
          
          <OptionButton>
            <OptionIcon 
              source={require('../../assets/images/relatorios.png')} 
            />
            <OptionText>Relatórios dos trechos cadastrados</OptionText>
          </OptionButton>
        </OptionRow>
        
        <OptionButton center>
          <OptionIcon 
            source={require('../../assets/images/diario-de-obra.png')} 
          />
          <OptionText>Relatórios Diário de Obras</OptionText>
        </OptionButton>
      </OptionsContainer>
      
      {/* Divisória personalizada estilo faixa amarela com listras */}
      <DividerContainer>
      <DividerImage
        source={require('../../assets/images/bar.png')}
        resizeMode="stretch"
      />
    </DividerContainer>
      {/* Barra de navegação inferior */}
      <BottomNavBar>
        <NavButton>
          <NavIcon 
            source={require('../../assets/images/home.png')} 
          />
          <NavText>Home</NavText>
        </NavButton>
        
        <NavButton>
          <NavIcon 
            source={require('../../assets/images/trechos-ferrovias.png')} 
          />
          <NavText>Cadastro de informações dos trechos</NavText>
        </NavButton>
        
        <NavButton>
          <NavIcon 
            source={require('../../assets/images/relatorios.png')} 
          />
          <NavText>Relatórios dos trechos cadastrados</NavText>
        </NavButton>
        
        <NavButton>
          <NavIcon 
            source={require('../../assets/images/diario-de-obra.png')} 
          />
          <NavText>Relatório Diário de Obras</NavText>
        </NavButton>
        
        <NavButton onPress={() => navigation.navigate('Login')}>
          <NavIcon 
            source={require('../../assets/images/sair.png')} 
          />
          <NavText>Sair</NavText>
        </NavButton>
      </BottomNavBar>
      
      {/* Aviso de canto inferior */}
      <BottomWarningIcon 
        // source={require('../../assets/images/warning.png')} 
      />
    </Container>
    </Background>
  );
};

// Estilos específicos para a divisória
const styles = StyleSheet.create({
  dividerContainer: {
    width: '100%',
    marginTop: 195,    // Mantendo o seu ajuste atual de margem superior
    overflow: 'hidden', // Isso impede que partes da imagem saiam do container
    transform: [{ rotate: '2deg' }], // Forçar alinhamento em 0 graus
  },
  dividerImage: {
    width: '100%',
    height: 50,      // Mantendo sua altura atual
    resizeMode: 'stretch', // Garantir que a imagem preencha todo o espaço disponível
    transform: [{ rotate: '0deg' }], // Força alinhamento em 0 graus também na imagem
  }
});

export default HomeScreen;