import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RecordsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Records</Text>
      <Text style={styles.text}>
        Route map records are available on mobile only.
      </Text>
      <Text style={styles.text}>
        This web version is only for testing login and basic navigation.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 600,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0d11',
    padding: 24,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 6,
  },
});
