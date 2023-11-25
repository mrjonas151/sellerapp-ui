import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import Icon from "@expo/vector-icons/MaterialIcons"
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Cadastro from "../Cadastro/index";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard(){
    const navigation = useNavigation();

    function goToLogin () {
        navigation.navigate("Login" as never);
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.logoContainer}>
                <Image
                style = {styles.logo}
                source={require('../../assets/Logo.SellerApp.png')}
                resizeMode="contain"
                />
            </View>
            

            <View style = {styles.sairContainer} >
                <TouchableOpacity>
                    <Text style = {styles.sairTexto} onPress={goToLogin}>Sair  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToLogin}><Icon style={styles.sairTexto} name="logout" size={70} color="#FFF" /></TouchableOpacity>
                
                
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#343434',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection:"row"
    },
    logoContainer: {
        flex:0.7,
        flexDirection: "row",
        height: '10%',
    },
    logo:{
        width: '50%',
        alignItems: 'flex-start',
        height: '90%'
    },
    sairContainer:{
        flex:0.3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 10,
        height: '10%'
    },
    sairTexto:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
