import React,{Component} from 'react';
import {Button, StyleSheet, Text, View,Alert,ToastAndroid,Platform } from 'react-native';

class App extends Component{
  render(){
    const notificar = msg => {
      if(Platform.OS=== 'android'){
        ToastAndroid.show(msg,ToastAndroid.SHORT)
      }else{
        Alert.alert('informação',msg)
      }
    }

    return(
      <View style={styles.container}>
        <Button title="plataform" onPress={() => notificar("você clicou")}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App