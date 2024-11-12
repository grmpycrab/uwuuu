import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RegisterScreen from './RegisterScreen';

export default function WelcomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    const openRegisterModal = () => {
        setModalVisible(true);
    };

    const closeRegisterModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/calendar-logo.png')} style={styles.logo} />
            </View>
            <Text style={styles.appName}>ClanPlan</Text>
            <Text style={styles.welcome}>WELCOME!</Text>

            <TouchableOpacity style={styles.createAccountButton} onPress={openRegisterModal}>
                <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.connectText}>connect with us</Text>
            <View style={styles.socialIconsContainer}>
                <FontAwesome name="google" size={24} color="black" />
                <FontAwesome name="instagram" size={24} color="black" style={styles.iconSpacing} />
                <FontAwesome name="facebook" size={24} color="black" style={styles.iconSpacing} />
                <FontAwesome name="twitter" size={24} color="black" style={styles.iconSpacing} />
            </View>

            <Text style={styles.footer}>Powered by: grmpycrab</Text>

            {/* Modal for RegisterScreen */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeRegisterModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={closeRegisterModal}>
                            <Text style={styles.closeText}>X</Text>
                        </TouchableOpacity>
                        <RegisterScreen />
                    </View>
                </View>
            </Modal>
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
    logoContainer: {
        borderRadius: 40,
        padding: 10,
        elevation: 10,
        marginBottom: 10,
    },
    logo: {
        width: 80,
        height: 80,
    },
    appName: {
        fontSize: 24,
        fontWeight: '600',
        color: '#4C9FBE',
        marginBottom: 20,
    },
    welcome: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    createAccountButton: {
        backgroundColor: '#ADD8E6',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginBottom: 10,
    },
    createAccountText: {
        fontSize: 18,
        color: '#333',
    },
    loginButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ADD8E6',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginBottom: 30,
    },
    loginText: {
        fontSize: 18,
        color: '#333',
    },
    connectText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 40,
    },
    iconSpacing: {
        marginHorizontal: 10,
    },
    footer: {
        fontSize: 12,
        color: '#666',
        position: 'absolute',
        bottom: 20,
    },
    // Modal styles
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 5,
    },
    closeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});
