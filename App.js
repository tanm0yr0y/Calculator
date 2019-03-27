
import React, {Component} from 'react';
import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import InputField from "./src/components/inputfield/InputField"
import Result from "./src/components/result/Result"
import ButtonField from "./src/components/buttonfield/ButtonField"


export default class App extends Component {

  state = {
    data: '',
    sign: '',
    data2: '',
    str: '',
    result: '',
    
  }

  calculationHelper = (prev, res, num) => {
    if(prev == '') {
      res = res + +num;
    }
    else if(prev == '+') {
      res = res + +num;
    }
    else if(prev == '-') {
      res = res - +num;
    }
    else if(prev == '*') {
      res = res * +num;
    }
    else if(prev == '/') {
      res = res / +num;
    }
    return res;
  }


  calculation = str => {
    let len = str.length;

    if(str[len - 1] == '+' || str[len - 1] == '-' || str[len - 1] == '*' || str[len - 1] == '/') {
      this.setState({
        result: ''
      })
      return;
    }
    
    let arr = [];
    let num = '';
    for(let i = 0; i < str.length; i++) {
      if(str[i] == '+') {
        arr.push(num);
        arr.push("+");
        num = '';
      }
      else if(str[i] == '-') {
        arr.push(num);
        arr.push("-");
        num = '';
      }
      else if(str[i] == '*') {
        arr.push(num);
        arr.push("*");
        num = '';
      }
      else if(str[i] == '/') {
        arr.push(num);
        arr.push("/");
        num = '';
      }
      else {
        num = num + str[i];
      }
    }
    arr.push(num);

    if(arr.length == 1) {
      this.setState({
        result: ''
      })
      return;
    }


    //Multiplication
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == "*") {
        let left = +arr[i-1];
        let right = +arr[i+1];
        let ans = left * right;
        arr[i-1] = ans;
        arr.splice(i, 2);
        i = i - 1;
      }
    }

    //Division
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == "/") {
        let left = +arr[i-1];
        let right = +arr[i+1];
        if(right == 0) {
          ToastAndroid.show("Can't divide by Zero", ToastAndroid.SHORT);
          return;
        }
        let ans = left / right;
        arr[i-1] = ans;
        arr.splice(i, 2);
        i = i - 1;
      }
    }

    

    
    let answer = +arr[0];
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] == "+") {
        answer = answer + +arr[i+1];
      }
      else if(arr[i] == '-') {
        answer = answer - +arr[i+1];
      }
      i++;
    }

    this.setState({
      result: answer
    });
  }

  buttonPressed = text => {


    if(text == "DEL") {
      
      this.setState({
        str: this.state.str.slice(0, this.state.str.length - 1)
      }, () => {
        this.calculation(this.state.str)
      });
      return;
    }
    if(this.state.str == '' && text == '.') return;
    if(this.state.str == '' && text == '0') return;
    if(this.state.str == '' && text == '=') return;
    if(this.state.str == '' && text == '+') return;
    if(this.state.str == '' && text == '/') return;
    if(this.state.str == '' && text == '*') return;
    if(this.state.str == '' && text == '-') return;

    let mystr = this.state.str;

    if(mystr[mystr.length-1] == '+' && (text == '+' || text == '-' || text == '*' || text == '/' || text == '.') ) return;
    if(mystr[mystr.length-1] == '-' && (text == '+' || text == '-' || text == '*' || text == '/' || text == '.') ) return;
    if(mystr[mystr.length-1] == '/' && (text == '+' || text == '-' || text == '*' || text == '/' || text == '.') ) return;
    if(mystr[mystr.length-1] == '*' && (text == '+' || text == '-' || text == '*' || text == '/' || text == '.') ) return;
    if(mystr[mystr.length-1] == '.' && (text == '+' || text == '-' || text == '*' || text == '/' || text == '.') ) return;


    let d = "";
    for(let i = 0; i < mystr.length; i++) {
      if(mystr[i] == '+' || mystr[i] == '-' || mystr[i] == '*' || mystr[i] == '/') {
        d = "";
      }
      else {
        d += mystr[i];
      }
    }
    
    for(let j = 0; j < d.length; j++) {
      if(d[j] == '.' && text == '.') {
        ToastAndroid.show("Invalid Format", ToastAndroid.SHORT);
        return;
      }
    }

    if(text == "=") {
      let currentStr = this.state.str;
      if(currentStr[currentStr.length - 1] == '+' || currentStr[currentStr.length - 1] == '-' || currentStr[currentStr.length - 1] == '*' || currentStr[currentStr.length - 1] == '/' || currentStr[currentStr.length - 1] == '.') {
        ToastAndroid.show("Invalid Format", ToastAndroid.SHORT);
        return;
      }
      this.calculation(this.state.str);
      this.setState({
        str: this.state.result.toString()
      })
    }
    else{
      this.setState( () => ({
        str: this.state.str + text
      }), () => {
        this.calculation(this.state.str)
      });
    }
    
  }



  render() { 

    return (
      <View style={styles.container}>
        <InputField showData = {this.state.str} />
        <Result result = {this.state.result} />
        <ButtonField onButtonPressed = {this.buttonPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
