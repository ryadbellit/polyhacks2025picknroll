import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    // Tu pourrais ajouter une logique de filtrage ici
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your adress..."
        value={searchText}
        onChangeText={handleSearchChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default SearchBar;
