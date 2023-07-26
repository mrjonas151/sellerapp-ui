import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function Login(){
    return(
        <View style = {styles.container}>
            <Image
                style = {styles.logo}
                source={require('../../assets/Logo.SellerApp.png')}
                resizeMode="contain"
            />
            <View style = {styles.inputContainer}>
                <TextInput placeholder="Usuario" placeholderTextColor={'white'} style = {styles.input}/>
                <TextInput placeholder="Senha" placeholderTextColor={'white'} style = {styles.input} secureTextEntry/>
                <TouchableOpacity>
                    <Text style = {styles.textoLogin}>Login</Text>
                </TouchableOpacity>

                <Text style = {styles.texto}>Ainda não tem conta?</Text>

                <TouchableOpacity>
                    <Text style = {styles.textoCadastro}>Cadastrar</Text>
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
        paddingBottom: 50,
    },

    logo:{
        width: '85%',
        marginBottom: 25,
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
        marginBottom: 24,
        borderRadius: 25,
        paddingHorizontal: 18,
        color: '#FFF',
    },
    texto:{
        color: '#FFF',
        marginTop: 21,
    },
    textoCadastro:{
        color:'#FFD700',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
    },
    textoLogin:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 13,
        marginBottom: 20,
    }
})