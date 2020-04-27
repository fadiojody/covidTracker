import React from 'react';
import {View , Text, FlatList } from 'react-native';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            students: [
                {
                    id: 1,
                    name: 'John',
                    faculty: 'Computer Science'
                },
                {
                    id: 2,
                    name: 'Jane',
                    faculty: 'Bussiness'
                },
                {
                    id: 3,
                    name: 'Bob',
                    faculty: 'Nurse'
                },
                {
                    id: 4,
                    name: 'Mike',
                    faculty: 'Computer Science'
                },
            ],
            refreshing: false
        }
    }

    renderItem = ({item}) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#000'}}>
        <Text> {item.name}  </Text>
        <Text> Faculty: {item.faculty}  </Text>
    </View>
    
    )

    onRefresh = () => {
        this.setState( {refreshing: true })
        const data = this.state.students.concat({ id: 5, name: 'Jordan', faculty:'Bussiness' })
        this.setState({
            refreshing: false,
            students: data
        })    
    }

    render(){

        return (
            <View>
            <FlatList 
                data={this.state.students}
                keyExtractor= {item => item.id.toString()}
                renderItem= {this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                />
            </View>
        )
    }
}

export default List; 