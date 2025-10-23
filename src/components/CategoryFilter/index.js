import React from 'react';
import { View, Picker} from 'react-native';
import styles from './styles';

export default function CategoryFilter({ category, onChangeCategory }) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={category}
        onValueChange={onChangeCategory}
        style={styles.picker}
      >
        <Picker.Item label="Todas" value="Todas" />
        <Picker.Item label="Tecnologia" value="Tecnologia" />
        <Picker.Item label="Esportes" value="Esportes" />
        <Picker.Item label="Política" value="Política" />
        <Picker.Item label="Entretenimento" value="Entretenimento" />
      </Picker>
    </View>
  );
}
