import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Cadastro from "../Cadastro/index";
import { AuthContext } from "../../contexts/AuthContext";

export default function Recover(){
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    function goToLogin(){
        navigation.navigate("Login")
    }

    return(
        <View style = {styles.container}>
            <Image
                style = {styles.logo}
                source={require('../../assets/Logo.SellerApp.png')}
                resizeMode="contain"
            />
            <View style = {styles.inputContainer}>
                <TextInput 
                    placeholder="Usuario" 
                    placeholderTextColor={'darkgray'} 
                    style = {styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                <View style = {styles.recoverContainer}>
                    <TouchableOpacity>
                        <Text style = {styles.textoRecover}>Recuperar conta</Text>
                    </TouchableOpacity>   
                </View>

                <Text style = {styles.texto}>Lembrou magicamente da sua senha?</Text>

                <TouchableOpacity onPress={goToLogin}>
                    <Text style = {styles.textoRecuperar}>Fazer Login</Text>
                </TouchableOpacity>
                
                
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#343434',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo:{
        width: '85%',
        marginBottom: 5,
        alignItems: 'center',
    },

    inputContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        paddingVertical: 8,
        paddingHorizontal: 32,
    },
    input:{
        width: '95%',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#757575',
        marginBottom: 13,
        borderRadius: 25,
        paddingHorizontal: 18,
        color: '#FFF',
    },
    texto:{
        color: '#FFF',
        marginTop: 21,
    },
    textoRecuperar:{
        color:'#FFD700',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    textoLogin:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 13,
        marginBottom: 20,
    },
    recoverContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        
    },
    textoRecover:{
        color:'#FFD700',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10
    }
})