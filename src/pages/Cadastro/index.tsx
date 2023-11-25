import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Cadastro(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPass, setRepeatPass] = useState('');

    const navigation = useNavigation();

    function handleCadastro(){
        return;
    }

    function goToLogin(){
        navigation.navigate("Login" as never);
    }

    return(
        <View style = {styles.container}>
            <Image
                style = {styles.logo}
                source={require('../../assets/Logo.SellerApp.png')}
                resizeMode="contain"
            />

            <Text style = {styles.welcome}>Bem-Vindo(a)!</Text>

            <View style = {styles.inputContainer}>
                <TextInput 
                    placeholder="E-mail" 
                    placeholderTextColor={'darkgray'} 
                    style = {styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput 
                    placeholder="Senha" 
                    placeholderTextColor={'darkgray'} 
                    style = {styles.input} 
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TextInput 
                    placeholder="Repetir senha" 
                    placeholderTextColor={'darkgray'} 
                    style = {styles.input} 
                    secureTextEntry
                    value={repeatPass}
                    onChangeText={setRepeatPass}
                />
                
                <TouchableOpacity onPress={handleCadastro}>
                    <Text style = {styles.textoLogin}>Cadastrar</Text>
                </TouchableOpacity>

                <Text style = {styles.texto}>Já possui uma conta?</Text>

                <TouchableOpacity onPress={goToLogin}>
                    <Text style = {styles.textoCadastro}>Fazer login</Text>
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
        margin: 0,
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
    },
    welcome:{
        color: '#FFF',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})