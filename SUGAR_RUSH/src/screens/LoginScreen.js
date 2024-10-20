import React from 'react';
import { ImageBackground, View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
    return (
        <ImageBackground style={styles.container} source={require('../assets/img/intro.jpg')}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Username" />
            </View>
            <View style={[styles.inputContainer, { marginBottom: 20 }]}>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 200 }}>APP</Text>
            <Text style={{ fontSize: 16 }}>Welcome to the App</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 300,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#2c786c',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        width: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonText: {
        textAlign: "center",
    },
});

export default LoginScreen;
