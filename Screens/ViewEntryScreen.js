import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { JournalContext } from '../context/JournalContext';

export default function ViewEntryScreen({ route }) {
  const { id } = route.params;
  const { entries } = useContext(JournalContext);

  const entry = entries.find(item => item.id === id);

  if (!entry) {
    return (
      <View style={styles.container}>
        <Text>Entry not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.message}>{entry.message}</Text>
      <Text style={styles.date}>{entry.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FEC2B5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  message: { fontSize: 16 },
  date: { fontSize: 14, color: '#555', marginTop: 20, textAlign: 'center' },
});