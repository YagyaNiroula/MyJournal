import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { JournalContext } from '../context/JournalContext';

export default function UpdateEntryScreen({ route, navigation }) {
  const { id } = route.params;
  const { entries, setEntries } = useContext(JournalContext);
  const entry = entries.find(item => item.id === id);

  const [title, setTitle] = useState(entry ? entry.title : '');
  const [message, setMessage] = useState(entry ? entry.message : '');

  useEffect(() => {
    if (!entry) {
      alert('Entry not found');
      navigation.goBack();
    }
  }, [entry]);

  const handleUpdate = () => {
    if (!title.trim() || !message.trim()) {
      alert('Please fill in both fields.');
      return;
    }
    const updatedEntry = { ...entry, title, message };
    setEntries(prevEntries =>
      prevEntries.map(item => (item.id === id ? updatedEntry : item))
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Journal Entry</Text>
      <TextInput
        style={styles.inputTitle}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.inputMessage}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your message"
        placeholderTextColor="#000"
        multiline
      />
      <Button title="Save Changes" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FEC2B5' },
  header: { fontSize: 20, marginBottom: 15, fontWeight: 'bold' },
  inputTitle: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  inputMessage: {
    height: 100,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
});