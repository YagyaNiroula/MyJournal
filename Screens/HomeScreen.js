import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!!</Text>
      <Button title="View Entries" onPress={() => navigation.navigate('JournalList')} />
      <Button title="New Entry" onPress={() => navigation.navigate('NewEntry')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FEC2B5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});