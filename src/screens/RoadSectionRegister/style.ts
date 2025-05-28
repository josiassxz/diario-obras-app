import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { fonts, fontSizes, fontWeights } from '../../theme/fonts';

interface ContainerProps {
  transparent?: boolean;
}

interface OptionButtonProps {
  center?: boolean;
}

export const Container = styled.ScrollView<ContainerProps>`
  
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
`;


export const BackButton = styled.TouchableOpacity`
  padding: 3px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 50%;
`;

export const MenuButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: #fff;
  border-radius: 50%;
  align-items: center;
`;

export const MenuLine = styled.View`
  width: 25px;
  height: 3px;
  background-color: #333;
  margin-vertical: 2px;
`;

export const MainImageContainer = styled.View`
  position: relative;
  width: 90%;  
  height: 300px; 
  margin-bottom: 20px;
`;

export const MainImage = styled.Image`
  position: absolute;
  width: 100%; 
  height: 130%; 
  top: -20%;
  left: 11.5%;
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







export const ContainerContent = styled.View`
  padding: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ContentTitle = styled.Text`
  font-size: ${fontSizes.xxl}px;
  font-weight: ${fontWeights.bold};
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
`

export const ContentSubtitle = styled.Text`
  font-size: ${fontSizes.md}px;
  font-weight: ${fontWeights.semiBold};
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  color: #666;
`;



export const OptionButton = styled.TouchableOpacity<OptionButtonProps>`
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
  margin-top: ${Platform.OS === 'ios' ? '140px' : '190px'};
  overflow: hidden;
  transform: rotate(2deg);
`;

export const DividerImage = styled.Image`
  width: 100%;
  height: 50px;
  transform: rotate(0deg);
`;