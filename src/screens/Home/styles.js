import styled, { css } from 'styled-components/native';
import { fonts, fontSizes, fontWeights } from '../../theme/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.transparent ? 'transparent' : '#FFFFFF'};
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  padding: 10px;
  align-items: flex-start;
`;

export const MenuButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const MenuLine = styled.View`
  width: 25px;
  height: 3px;
  background-color: #333;
  margin-vertical: 2px;
`;

export const MainImageContainer = styled.View`
  position: relative;
  width: 100%;
  height: 180px;
  margin-bottom: 20px;
`;

export const MainImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const WarningBorderTop = styled.View`
  position: absolute;
  top: 0;
  height: 15px;
  width: 100%;
  background-color: #FFCC33;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

export const WarningBorderBottom = styled.View`
  position: absolute;
  bottom: 0;
  height: 15px;
  width: 100%;
  background-color: #FFCC33;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

export const WarningIcon = styled.Image`
  position: absolute;
  bottom: 5px;
  left: 10px;
  width: 25px;
  height: 25px;
  z-index: 2;
`;

export const ConeIcon = styled.Image`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 25px;
  height: 25px;
  z-index: 2;
`;

export const OptionsContainer = styled.View`
  padding: 15px;
  margin-bottom: 10px;
`;

export const OptionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const OptionButton = styled.TouchableOpacity`
  background-color: #FFFFFF;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 48%;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 2;
  
  ${props => props.center && css`
    width: 48%;
    align-self: center;
  `}
`;

export const OptionIcon = styled.Image`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
`;

export const OptionText = styled.Text`
  font-family: ${fonts.aller.regular};
  font-size: ${fontSizes.sm}px;
  text-align: center;
  color: #333;
`;

export const NavBarDivider = styled.Image`
  width: 100%;
  height: 5px; 
`;

export const BottomNavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: #EEEEEE;
  padding-vertical: 10px;
  padding-horizontal: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const NavButton = styled.TouchableOpacity`
  margin-bottom: 14px;
  align-items: center;
  flex: 1;
`;

export const NavIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const NavText = styled.Text`
  font-family: ${fonts.aller.bold};
  font-size: ${fontSizes.xs}px;
  margin-top: 3px;
  text-align: center;
  color: #333;
`;

export const BottomWarningIcon = styled.Image`
  position: absolute;
  bottom: 70px;
  left: 10px;
  width: 25px;
  height: 25px;
`;

export const DividerContainer = styled.View`
  width: 100%;
  margin-top: 190px;
  overflow: hidden;
  transform: rotate(2deg);
`;

export const DividerImage = styled.Image`
  width: 100%;
  height: 50px;
  transform: rotate(0deg);
`;