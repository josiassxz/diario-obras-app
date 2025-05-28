import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import {
  DividerContainer,
  DividerImage,
  Container,
  Header,
  MenuButton,
  MenuLine,
  MainImageContainer,
  MainImage,
  OptionButton,
  OptionIcon,
  OptionText,
  BottomNavBar,
  NavButton,
  NavIcon,
  NavText,
  BottomWarningIcon,
  BackButton,
  ContainerContent,
  ContentTitle,
  ContentSubtitle
} from './style';
import CustomMenuModal from '../Menu';
import Background from '../../components/Background';
import { StatusBar, Text, View, ScrollView, StyleSheet } from 'react-native';
import { ChevronLeft, Menu } from 'lucide-react-native';
import Select from '../../components/Select';
import { RoadSectionCard } from '../../components/RoadSectionCard';
import { RoadSectionModal } from '../../components/RoadSectionModal';
import { RoadSectionForm } from '../../components/RoadSectionForm';

type RootStackParamList = {
  RoadSectionRegister: undefined;
  RelatoriosTrechos: undefined;
  DiarioObra: undefined;
  CadastroTrechos: undefined;
  Login: undefined;
};

const cards = [
  { id: '1', title: 'Supressão Vegetal' },
  { id: '2', title: 'Terraplanagem' },
  { id: '3', title: 'Sublastro' },
  { id: '4', title: 'Pavimentação' },
  { id: '5', title: 'Obras de Arte Especiais' },
  { id: '6', title: 'Obras de Arte Correntes' },
]

export const RoadSectionRegister = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [formVisible, setFormVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedRoadSection, setSelectedRoadSection] = useState<string>('');
  const [menuVisible, setMenuVisible] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleOpenMenu = () => {
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    if (selectedValue && scrollViewRef.current) {

      const timeout = setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [selectedValue]);

  return (
    <Background>
      <ScrollView
        ref={scrollViewRef}
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          position: 'relative',
        }}
      >

        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

        {/* Cabeçalho */}
        <Header>
          <BackButton onPress={handleOpenMenu} activeOpacity={0.7}>
            <ChevronLeft size={28} color="#000000" />
          </BackButton>

          <MenuButton onPress={handleOpenMenu} activeOpacity={0.7}>
            <Menu size={28} color="#000000" />
          </MenuButton>
        </Header>

        {/* Imagem fixa no topo */}
        <MainImageContainer style={styles.fixedTopImage}>
          <MainImage
            source={require('../../assets/images/background-topo.png')}
            resizeMode="cover"
          />
        </MainImageContainer>

        {/* Conteúdo rolável */}
        <ContainerContent style={{ paddingTop: 200, paddingBottom: 100 }}>
          <View style={{
            width: '80%',
            marginHorizontal: '10%',
            gap: 10,
            marginTop: 50,
          }}>
            <ContentTitle>
              Cadastro das informações dos trechos ferroviários
            </ContentTitle>

            <ContentSubtitle>
              No campo de seleção abaixo, escolha o trecho ferroviário para preencher as informações.
            </ContentSubtitle>

            <Select
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              items={[
                { label: 'Trecho 1', value: 'trecho1' },
                { label: 'Trecho 2', value: 'trecho2' },
                { label: 'Trecho 3', value: 'trecho3' },
              ]}
            />

            {selectedValue && (
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 20, justifyContent: 'space-between', width: '100%', columnGap: 10 }}>
                {
                  cards.map(card => (
                    <RoadSectionCard
                      key={card.id}
                      id={card.id}
                      title={card.title}
                      onPress={() => {
                        setSelectedRoadSection(card.title);
                        setModalVisible(true);
                      }}
                    />
                  ))
                }
              </View>
            )}
          </View>
        </ContainerContent>

      </ScrollView>

      <View style={{ position: 'absolute', bottom: 60, left: 0, right: 0, zIndex: 1 }}>
        <DividerImage
          source={require('../../assets/images/bar.png')}
          resizeMode="stretch"
        />
      </View>

      {/* Menu fixo no final */}
      <BottomNavBar>
        <NavButton>
          <NavIcon source={require('../../assets/images/home.png')} />
          <NavText>Home</NavText>
        </NavButton>

        <NavButton onPress={() => navigation.navigate('CadastroTrechos')}>
          <NavIcon source={require('../../assets/images/trechos-ferrovias.png')} />
          <NavText>Cadastro</NavText>
        </NavButton>

        <NavButton onPress={() => navigation.navigate('RelatoriosTrechos')}>
          <NavIcon source={require('../../assets/images/relatorios.png')} />
          <NavText>Relatórios</NavText>
        </NavButton>

        <NavButton onPress={() => navigation.navigate('DiarioObra')}>
          <NavIcon source={require('../../assets/images/diario-de-obra.png')} />
          <NavText>Diário</NavText>
        </NavButton>

        <NavButton onPress={() => navigation.navigate('Login')}>
          <NavIcon source={require('../../assets/images/sair.png')} />
          <NavText>Sair</NavText>
        </NavButton>
      </BottomNavBar>

      {/* Modal de menu */}
      <CustomMenuModal
        visible={menuVisible}
        onClose={handleCloseMenu}
      />

      <RoadSectionModal
        visible={modalVisible}
        setVisible={setModalVisible}
        setFormVisible={setFormVisible}
        title={selectedRoadSection}
      />

      <RoadSectionForm  
        visible={formVisible}
        setVisible={setFormVisible}
        title={selectedRoadSection}
      />

    </Background >
  )
}

const styles = StyleSheet.create({
  fixedTopImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120, // espaço para não sobrepor o BottomNavBar
  }
});
