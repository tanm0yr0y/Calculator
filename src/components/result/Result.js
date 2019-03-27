import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Result extends Component {
    render() {
        return (
            <View style = {styles.result}>
                <Text style = {{color: "black", fontSize: 25, paddingBottom: 5}}>{this.props.result}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    result: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "#a9a9a9",
        paddingRight: 10
    },
})