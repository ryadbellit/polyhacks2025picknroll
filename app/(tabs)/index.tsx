import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import SearchBar from '../../components/SearchBar';

const App: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default App;
