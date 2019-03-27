import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class InputField extends Component {
    render() {
        return (
            <View style = {styles.inputField}>
                <Text style = {{color: "black", fontSize: 25}}>{this.props.showData}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputField: {
        flex: 2,
        backgroundColor: "skyblue",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "whitesmoke",
        paddingRight: 10
    },
})