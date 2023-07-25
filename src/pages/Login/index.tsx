import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Login(){
    return(
        <View style = {styles.container}>
            <Text>Tela de login okok</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#343434',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})