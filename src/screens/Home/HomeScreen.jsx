
import React, { useState, useEffect } from 'react';
import { StatusBar, Image, View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
import CustomMenuModal from '../Menu'; // Importando o modal de menu
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
  // Estado para controlar a visibilidade do menu
  const [menuVisible, setMenuVisible] = useState(false);
  
  // Debug: mostrar se o menu está visível ou não
  useEffect(() => {
    console.log(`Menu visível: ${menuVisible}`);
  }, [menuVisible]);

  // Função para abrir o menu de hambúrguer
  const handleOpenMenu = () => {
    setMenuVisible(true);
  };

  // Função para fechar o menu
  const handleCloseMenu = () => {
    console.log("Fechando menu");
    setMenuVisible(false);
  };

  return (
    <Background>
    <Container transparent>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Menu de hambúrguer com função de abertura */}
      <Header>
        <MenuButton onPress={handleOpenMenu} activeOpacity={0.7}>
          <MenuLine />
          <MenuLine />
          <MenuLine />
        </MenuButton>
      </Header>
      
      {/* Modal de menu customizado */}
      <CustomMenuModal 
        visible={menuVisible} 
        onClose={handleCloseMenu} 
      />
      
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
          <OptionButton onPress={() => {
            console.log("Botão Cadastro pressionado");
            navigation.navigate('CadastroTrechos');
          }}>
            <OptionIcon 
              source={require('../../assets/images/trechos-ferrovias.png')} 
            />
            <OptionText>Cadastro de informações dos trechos</OptionText>
          </OptionButton>
          
          <OptionButton onPress={() => {
            console.log("Botão Relatórios pressionado");
            navigation.navigate('RelatoriosTrechos');
          }}>
            <OptionIcon 
              source={require('../../assets/images/relatorios.png')} 
            />
            <OptionText>Relatórios dos trechos cadastrados</OptionText>
          </OptionButton>
        </OptionRow>
        
        <OptionButton center onPress={() => {
          console.log("Botão Diário pressionado");
          navigation.navigate('DiarioObra');
        }}>
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
        
        <NavButton onPress={() => navigation.navigate('CadastroTrechos')}>
          <NavIcon 
            source={require('../../assets/images/trechos-ferrovias.png')} 
          />
          <NavText>Cadastro</NavText>
        </NavButton>
        
        <NavButton onPress={() => navigation.navigate('RelatoriosTrechos')}>
          <NavIcon 
            source={require('../../assets/images/relatorios.png')} 
          />
          <NavText>Relatórios</NavText>
        </NavButton>
        
        <NavButton onPress={() => navigation.navigate('DiarioObra')}>
          <NavIcon 
            source={require('../../assets/images/diario-de-obra.png')} 
          />
          <NavText>Diário</NavText>
        </NavButton>
        
        <NavButton onPress={() => navigation.navigate('Login')}>
          <NavIcon 
            source={require('../../assets/images/sair.png')} 
          />
          <NavText>Sair</NavText>
        </NavButton>
      </BottomNavBar>
    </Container>
    </Background>
  );
};

export default HomeScreen;