import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>My name is Nana <Text style = {styles.bolden}>Yaw Kyei</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250,100,230)',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  bolden:{
    fontWeight: "bold"
  },
  font:{
    fontSize: 24
  }
});
