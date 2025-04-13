import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.info}>Name: Kavya, Deep, Milan, Yagya</Text>
      <Text style={styles.info}>Group: Cyber Spartans</Text>
      {/* Add additional profile information here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEC2B5', // Changed background color
    padding: 20,
  },
  title: {
    fontSize: 28,         // Increased font size
    fontWeight: 'bold',   // Made the title bold
    marginBottom: 20,
    color: '#333',        // Optional: set a custom color for better contrast
  },
  info: {
    fontSize: 20,         // Increased font size for info text
    fontWeight: 'bold',   // Made the info text bold
    marginBottom: 10,
    color: '#555',        // Optional: a slightly lighter color than title
  },
});