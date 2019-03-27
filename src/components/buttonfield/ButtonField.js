import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, ToastAndroid, View, TouchableOpacity} from 'react-native';

export default class MyButton extends Component {

    render() {

        let rows = [];
        let num = [ ['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['.', '0', '='] ];

        for(let i = 0; i < 4; i++) {
            let row = [];
            for(let j = 0; j < 3; j++) {
                row.push(
                    <View style = {styles.operation}>
                        <TouchableOpacity style = {styles.touchableButton} onPress = { () => this.props.onButtonPressed(num[i][j]) }>
                            <Text style = {styles.touchableButtonText}> {num[i][j]} </Text>
                        </TouchableOpacity>
                    </View>
                );
            }
            rows.push(<View style={styles.row}>{row}</View>);
        }


        return (

            <View style = {styles.buttonfield}>
                <View style = {styles.firstHalf}>
                   {rows}
                </View>

                <View style = {styles.secondHalf}>
                    <View style = {styles.operation}>
                        <TouchableOpacity style = {styles.touchableButton} onPress = { () => {this.props.onButtonPressed("DEL")}}>
                            <Text style = {styles.touchableButtonText}>DEL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.operation}>
                        <TouchableOpacity style = {styles.touchableButton} onPress = { () => {this.props.onButtonPressed("/")}} >
                            <Text style = {styles.touchableButtonText}>/</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.operation}>
                        <TouchableOpacity style = {styles.touchableButton} onPress = { () => {this.props.onButtonPressed("*")}} >
                            <Text style = {styles.touchableButtonText}>*</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.operation} >
                        <TouchableOpacity style = {styles.touchableButton} onPress = { () => {this.props.onButtonPressed("-")}} >
                            <Text style = {styles.touchableButtonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.operation}>
                        <TouchableOpacity style = {styles.touchableButton} onPress = { () => {this.props.onButtonPressed("+")}} >
                            <Text style = {styles.touchableButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonfield: {
        flex: 7,
        flexDirection: "row",
    },
    firstHalf: {
        flex: 3,
        backgroundColor: "tomato"
    },
    secondHalf: {
        flex: 1,
        backgroundColor: "yellow"
    },
    row: {
        flex:1,
        flexDirection: "row"
    },
    operation: {
        flex: 1,
        flexDirection: "row"
    },
    touchableButton: {
        backgroundColor: "black", 
        width: "100%",
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "center"
    },
    touchableButtonText: {
        
        fontSize: 20,
        color: "white",
    }
    
})