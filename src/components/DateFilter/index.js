import React from 'react';
import { View, Picker} from 'react-native';
import styles from './styles';

export default function DateFilter({ date, onChangeDate }) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={date}
        onValueChange={onChangeDate}
        style={styles.picker}
      >
        <Picker.Item label="Todas" value="Todas" />
        <Picker.Item label="Últimos 7 dias" value="Últimos 7 dias" />
        <Picker.Item label="Últimos 30 dias" value="Últimos 30 dias" />
        <Picker.Item label="Últimos 90 dias" value="Últimos 90 dias" />
        </Picker>
    </View>
  );
}
