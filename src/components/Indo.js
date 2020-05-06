import React from 'react';
import {View , Text, FlatList, StyleSheet,ScrollView } from 'react-native';

class Indo extends React.Component{
    constructor(){
        super();
        this.state = {
            indonesia: [],
            refreshing: false,
            
        }
    }

    renderItem = ({item}) => (
        
    <View style={{ flex: 1, flexDirection: 'row',justifyContent:'space-between', padding: 10, borderWidth: 2, borderRadius: 10}}>
        
        
        <Text style ={{fontWeight: 'bold',fontSize:16,color:'black'}}> {item.provinsi}:  </Text>
       
        <View style={{flexDirection:'row', justifyContent: 'flex-end'}}>
        
        <View style ={{
            fontWeight: 'bold',
            justifyContent: 'center' ,
            flexDirection: 'row',
            backgroundColor: 'yellow',
            borderRadius: 50, 
            width: 66 , 
            height: 25 }}> 
        <Text style ={{
        fontWeight:'bold',
        fontSize: 15

        }}>  {item.kasusPosi}  </Text>
        </View>

        <View style ={{
            fontSize: 40,

            fontWeight: 'bold',
            justifyContent: 'center' ,
            flexDirection: 'row',
            backgroundColor: '#28B463',
            borderRadius: 50 , 
            width: 60 , 
            height: 25 }}>
        <Text style ={{
        
        fontWeight:'bold',
        fontSize: 15

        }}> {item.kasusSemb}  </Text>
        </View>

        <View style ={{
    
            justifyContent: 'center' ,
            flexDirection: 'row',
            borderRadius:50,
            backgroundColor: 'red', 
            width: 60, 
            height: 25 }}>
        <Text style ={{
        
     
        fontWeight:'bold',
        fontSize: 15,
        

        }}>  {item.kasusMeni}  </Text>
        </View>
        </View>
        </View>

    
    )

     

    onRefresh = () => {
        this.getDataApi();
    }
    componentDidMount = () => {
      this.getDataApi();
    }

    getDataApi = async () => {
        this.setState( {refreshing: true })
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi');
        const json = await response.json();
        this.setState({ indonesia: json.data, refreshing: false})
    }

    render(){
        console.log(this.state.indonesia);
        return (
           
            
           <View style ={{justifyContent: 'center', paddingBottom: 520}}>
               
            
            <FlatList 
                
                data={this.state.indonesia}
                keyExtractor= {item => item.fid.toString()} 
                renderItem= {this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                />
            </View>
            
        )
    }
}

export default Indo; 