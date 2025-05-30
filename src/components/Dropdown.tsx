import { Check } from 'lucide-react-native';
import { SetStateAction, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown as RnDropdown } from 'react-native-element-dropdown';

interface IProps {
  value: string | null;
  setValue: React.Dispatch<SetStateAction<string>>;
  placeholder: string;
  data: { label: string; value: string }[];
}

export const Dropdown = ({ value, setValue, placeholder, data }: IProps) => {

  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <RnDropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Pesquise aqui..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: { value: string; }) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 13,
    paddingHorizontal: 8,
    width: '100%',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});