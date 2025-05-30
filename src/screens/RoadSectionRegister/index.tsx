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
import { StatusBar, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft, Menu } from 'lucide-react-native';
import Select from '../../components/Select';
import { RoadSectionCard } from '../../components/RoadSectionCard';
import { RoadSectionForm } from '../../components/RoadSectionForm';
import { Dropdown } from '../../components/Dropdown';
import { MainModal } from '../../components/MainModal';
import { Table } from '../../components/Table';
import { TableComponent } from '../../components/TableComponent';
import { Button } from '../../components/Button';
import { useAppStore } from '../../store/store';
import { OverviewRoadSection } from '../../components/OverviewRoadSection';
import { CreateRoadSection } from '../../components/forms/CreateRoadSection';
import { EditRoadSection } from '../../components/forms/EditRoadSection';

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

const empreendimentoData = [
  { label: 'EFC', value: '1' },
  { label: 'EFPO', value: '2' },
  { label: 'EFVM', value: '3' },
  { label: 'FCA', value: '4' },
  { label: 'FNSTN', value: '5' },
  { label: 'FTC', value: '6' },
  { label: 'FTL', value: '7' },
  { label: 'MRS', value: '8' },
  { label: 'RMC', value: '8' },
  { label: 'RMN', value: '8' },
  { label: 'RMO', value: '8' },
];

const lotesData = [
  { label: 'Lote 1', value: '1' },
  { label: 'Lote 2', value: '2' },
  { label: 'Lote 3', value: '3' },
  { label: 'Lote 4', value: '4' },
]

export const RoadSectionRegister = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedRoadSection, setSelectedRoadSection] = useState<string>('');
  const [menuVisible, setMenuVisible] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedEmpreendimento, setSelectedEmpreendimento] = useState<string>('');
  const [selectedLote, setSelectedLote] = useState<string>('');

  const { currentScreen, setCurrentScreen } = useAppStore()

  const handleOpenMenu = () => {
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    if (selectedLote !== '' && selectedEmpreendimento !== '' && scrollViewRef.current) {

      const timeout = setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [selectedLote]);

  useEffect(() => {
    if (selectedLote !== '' && selectedEmpreendimento !== '' && scrollViewRef.current) {

      const timeout = setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [selectedEmpreendimento]);

  useEffect(() => {

    if (!modalVisible) {
      setSelectedRoadSection('');
      setCurrentScreen('view');
    }

  }, [modalVisible]);

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
            gap: 10,
            marginTop: 50,
            alignSelf: 'center',
          }}>
            <ContentTitle>
              Cadastro das informações dos trechos ferroviários
            </ContentTitle>

            <ContentSubtitle>
              No campo de seleção abaixo, escolha o trecho ferroviário para preencher as informações.
            </ContentSubtitle>

            <Dropdown
              value={selectedEmpreendimento}
              setValue={setSelectedEmpreendimento}
              placeholder='Selecione o empreendimento'
              data={empreendimentoData}
            />

            <Dropdown
              value={selectedLote}
              setValue={setSelectedLote}
              placeholder='Selecione o lote'
              data={lotesData}
            />

            {selectedLote && selectedEmpreendimento && (
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

        <NavButton onPress={() => navigation.navigate('RoadSectionRegister')}>
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

      <MainModal
        visible={modalVisible}
        setVisible={setModalVisible}
        title={selectedRoadSection}
        marginTop={150}
        height={800}
      >

        {
          currentScreen === 'view' ?
            <OverviewRoadSection />
            : currentScreen === 'create' ?
              <CreateRoadSection
              />
              : currentScreen === 'edit' ?
                <EditRoadSection
                />
                : currentScreen === 'details' ?
                  <EditRoadSection
                  />
                  : null
        }

      </MainModal>

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
