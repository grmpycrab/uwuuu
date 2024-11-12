import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Install if needed: expo install @expo/vector-icons

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.appName}>ClanPlan</Text>
            </View>

            <Text style={styles.welcome}>WELCOME!</Text>

            <TouchableOpacity style={styles.createAccountButton}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.connectText}>connect with us</Text>

            <View style={styles.socialIcons}>
                <FontAwesome name="google" size={24} color="black" />
                <FontAwesome name="instagram" size={24} color="black" style={styles.iconSpacing} />
                <FontAwesome name="facebook" size={24} color="black" style={styles.iconSpacing} />
                <FontAwesome name="twitter" size={24} color="black" style={styles.iconSpacing} />
            </View>

            <Text style={styles.footerText}>Powered by: grmpycrab</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EAF6FF',
        paddingTop: 60,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 60,
        height: 60,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#4F9DA6',
    },
    welcome: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    createAccountButton: {
        backgroundColor: '#A4D4F7',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginVertical: 10,
    },
    loginButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#A4D4F7',
        marginVertical: 10,
    },
    buttonText: {
        color: '#333',
        fontSize: 18,
    },
    connectText: {
        fontSize: 16,
        color: '#333',
        marginVertical: 20,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    iconSpacing: {
        marginHorizontal: 10,
    },
    footerText: {
        fontSize: 12,
        color: '#333',
        marginTop: 'auto',
        marginBottom: 20,
    },
});
