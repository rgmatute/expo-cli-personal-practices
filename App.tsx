import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hola</Text>
      <StatusBar style="auto" />

      <TouchableOpacity onPress={()=>test()}>
        <Text>Prueba Native Component</Text>
      </TouchableOpacity>
    </View>
  );
}

const test = ()=>{
  NativeModules.Util.getDeviceName((name:any)=>{
    console.log(name);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
