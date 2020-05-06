import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar,ScrollView } from 'react-native';
import Global from './src/components/Global';
import Indo from './src/components/Indo';
import Input from './src/components/Input'
import Layout from './src/components/Layout';
import Header from './src/components/Header';
import BackGround from './src/components/BackGround';
import Headerglobal from './src/components/Headerglobal';
import HeaderIndo from './src/components/HeaderIndo';



class App extends Component {

 async componentDidMount() {
    StatusBar.setHidden(true);

}
   
  render() {
     return(
    
      

      
      <View>
          
     <View style={{flex:1}}>
            <BackGround />
     </View>
            

     <View style={{padding:40}}>
          <Header />
     </View>

          <View style={{padding:1}}>
          <Headerglobal />
          </View>
   
    <View >

    <Global />

    </View>

    <View style ={{padding:30}}>
        <HeaderIndo />
    </View>

      
      <View >
        <Indo />
      </View>
  

</View>

    //  <View >
    //   <Input />
    //   </View>
      
      // <View>
      // <Indo />
      // </View>

    //   </View>

      // <Layout />
        // <Project />
     //    <Layout/>
    
      )
  }
};


export default App;