import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Content,
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
    <Container>
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
          source={require('../../assets/images/railway_construction.png')} 
          resizeMode="cover"
        />
        <WarningBorderTop />
        <WarningBorderBottom />
        <WarningIcon 
          // source={require('../../assets/images/warning.png')} 
        />
        <ConeIcon 
          source={require('../../assets/images/cone_icon.png')} 
        />
      </MainImageContainer>
      
      {/* Botões de opções */}
      <OptionsContainer>
        <OptionRow>
          <OptionButton>
            <OptionIcon 
              source={require('../../assets/images/diario_icon.png')} 
            />
            <OptionText>Cadastro de informações dos trechos</OptionText>
          </OptionButton>
          
          <OptionButton>
            <OptionIcon 
              source={require('../../assets/images/relatorios_icon.png')} 
            />
            <OptionText>Relatórios dos trechos cadastrados</OptionText>
          </OptionButton>
        </OptionRow>
        
        <OptionButton center>
          <OptionIcon 
            source={require('../../assets/images/diario_icon.png')} 
          />
          <OptionText>Relatórios Diário de Obras</OptionText>
        </OptionButton>
      </OptionsContainer>
      
      {/* Barra de navegação inferior */}
      <BottomNavBar>
        <NavButton>
          <NavIcon 
            source={require('../../assets/images/home_icon.png')} 
          />
          <NavText>Home</NavText>
        </NavButton>
        
        <NavButton>
          <NavIcon 
            source={require('../../assets/images/cadastro_icon.png')} 
          />
          <NavText>Cadastro de trechos</NavText>
        </NavButton>
        
        <NavButton>
          <NavIcon 
            source={require('../../assets/images/relatorios_icon.png')} 
          />
          <NavText>Relatórios dos trechos</NavText>
        </NavButton>
        
        <NavButton>
          <NavIcon 
            source={require('../../assets/images/diario_icon.png')} 
          />
          <NavText>Relatório Diário de Obras</NavText>
        </NavButton>
        
        <NavButton onPress={() => navigation.navigate('Login')}>
          <NavIcon 
            source={require('../../assets/images/sair_icon.png')} 
          />
          <NavText>Sair</NavText>
        </NavButton>
      </BottomNavBar>
      
      {/* Aviso de canto inferior */}
      <BottomWarningIcon 
        // source={require('../../assets/images/warning.png')} 
      />
    </Container>
  );
};

export default HomeScreen;