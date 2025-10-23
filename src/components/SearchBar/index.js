import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';


const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar notícias..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
    </View>
  );
};


export default SearchBar;