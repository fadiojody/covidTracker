import React from 'react';
import {View , Text, FlatList } from 'react-native';
 
class Global extends React.Component{
    constructor(){
        super();
            this.state = {
                positif:[],
                sembuh:[],
                meninggal:[],
                refreshing: true
            
        }
    }

    renderItem = ({item}) => (
    <View>
     
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>


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
        // this.setState({ refreshing: true})
        // fetch('https://covid19.mathdro.id/api')
        // .then(response => response.json())
        // .then(json => this.setState({  global: json.confirmed }))
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({ positif: json.confirmed.value,
                        sembuh: json.recovered.value,
                        meninggal: json.deaths.value, 
                        refreshing: false})
      

    }


    render(){
        console.log(this.state.global);
        
        return (
            <View>
                
            <FlatList 
                data={[this.state.postif],[this.state.sembuh], [this.state.meninggal]}
                keyExtractor= {item => item.toString()}
                renderItem= {this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                />
                
         <View style={{flexDirection:'row', justifyContent: 'space-between'}}>

        <View style = {{
            justifyContent: 'flex-end',
            fontWeight: 'bold',
            justifyContent: 'center' ,
            flexDirection: 'column',
            backgroundColor: 'yellow',
            borderRadius: 20, 
            width: 115 , 
            height: 115 }}>
            <Text style={{fontWeight:'bold',textAlign:'center'}}> Positif:   </Text>
            <Text style={{fontWeight:'bold', textAlign:'center'}}> {this.state.positif} </Text>
                </View>

                <View style = {{
            justifyContent: 'flex-end',
            fontWeight: 'bold',
            justifyContent: 'center' ,
            flexDirection: 'column',
            backgroundColor: '#28B463',
            borderRadius: 20, 
            width: 115 , 
            height: 115 }}>
            <Text style={{fontWeight:'bold',textAlign:'center'}}> Sembuh:   </Text>
            <Text style={{fontWeight:'bold', textAlign:'center'}}>{this.state.sembuh}</Text>
                
            </View>

            <View style = {{
            justifyContent: 'flex-end',
            fontWeight: 'bold',
            justifyContent: 'center' ,
            flexDirection: 'column',
            backgroundColor: 'red',
            borderRadius: 20, 
            width: 115 , 
            height: 115 }}>
            <Text style={{fontWeight:'bold',textAlign:'center'}}> Meninggal:   </Text>
            <Text style={{fontWeight:'bold', textAlign:'center'}}>{this.state.meninggal}</Text>
            
            </View>
            </View>
            </View>
            
        )
    }
}

export default Global; 