import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            counter: 0
        }
    }
    onPress = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter your name"
                    onChangeText={text => this.setState({ name: text })}
                    defaultValue={this.state.name}
                />
                <Text>Your name is : {this.state.name}</Text>
                <Button
                    onPress={this.onPress}
                    title="Press Me"
                    color="#841584"
                />
                <Text>Counter: {this.state.counter}</Text>
            </View>
        )
    }
}

export default Input;