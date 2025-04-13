import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import { JournalContext } from '../context/JournalContext';

export default function JournalListScreen({ navigation }) {
  const { entries, setEntries } = useContext(JournalContext);

  const handleDelete = (id) => {
    Alert.alert(
      'Delete Entry',
      'Are you sure you want to delete this entry?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive', 
          onPress: () => {
            setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
          } 
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {entries.length === 0 ? (
        <Text>No entries yet.</Text>
      ) : (
        entries.map(entry => (
          <View key={entry.id} style={styles.entry}>
            <Text style={styles.entryTitle}>
              {entry.title} - {entry.date}
            </Text>
            <View style={styles.buttonContainer}>
              <Button title="View" onPress={() => navigation.navigate('ViewEntry', { id: entry.id })} />
              <Button title="Update" onPress={() => navigation.navigate('UpdateEntry', { id: entry.id })} />
              <Button title="Delete" onPress={() => handleDelete(entry.id)} color="red" />
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FEC2B5',
  },
  entry: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#def',
    borderRadius: 5,
  },
  entryTitle: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold', // Title appears in bold
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});