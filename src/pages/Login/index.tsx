import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    function handleLogin(){
        if(email === '' || password === ''){
            return;
        }

        alert(password)
    }

    function goToHome(){
        navigation.navigate("Dashboard" as never);
    }

    function goToCadastro(){
        navigation.navigate("Cadastro" as never);
    }

    function goToRecover(){
        navigation.navigate("Recover" as never);
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

                <View style = {styles.recoverContainer}>
                    <TouchableOpacity onPress={goToRecover}>
                        <Text style = {styles.textoRecover}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>   
                </View>
                


                <TouchableOpacity onPress={goToHome}>
                    <Text style = {styles.textoLogin}>Login</Text>
                </TouchableOpacity>

                <Text style = {styles.texto}>Ainda não possui uma conta?</Text>

                <TouchableOpacity onPress={goToCadastro}>
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
        marginBottom: 13,
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
    recoverContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '90%',
        
    },
    textoRecover:{
        color:'#FFD700',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10
    }
})