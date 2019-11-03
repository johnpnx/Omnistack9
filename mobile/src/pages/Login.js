import React from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

import logo from '../assets/logo.png'


export default function Login() {

    return (
        <KeyboardAvoidingView  enabled={Platform.OS === 'ios' } behavior='padding' style={styles.container} >
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Seu melhor e-mail*'
                    placeholderTextColor='#999'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Tecnologiasde interesse*'
                    placeholderTextColor='#999'
                    autoCorrect={false}
                    autoCapitalize= 'words'
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    label: {
        fontWeight: 'bold',
        color : '#444',
        marginBottom:  8 
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16, 
        color: '#444', 
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 2

    },

    buttonText: {
        color: '#fff' ,
        fontWeight: 'bold',
        fontSize: 16,
        // textAlign: 'center'


    }


});