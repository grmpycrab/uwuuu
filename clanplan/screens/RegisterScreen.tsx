    import React, { useState } from "react";
    import { View, Text, TextInput, Button, Alert } from "react-native";
    import axios from "axios";

    interface Props {
        navigation: any;
    }

    const RegisterScreen: React.FC<Props> = ({ navigation }) => {
        const [name, setName] = useState<string>("");
        const [email, setEmail] = useState<string>("");
        const [password, setPassword] = useState<string>("");

        const register = async () => {
            try {
                await axios.post("http://192.168.1.18:5000/api/auth/register", { name, email, password });
                Alert.alert("Registration successful");
                navigation.navigate("Login");
            } catch (error: any) {
                Alert.alert("Registration failed", error.response?.data?.message || error.message);
            }
        };

        return (
            <View>
                <Text>Name</Text>
                <TextInput value={name} onChangeText={setName} />
                <Text>Email</Text>
                <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" />
                <Text>Password</Text>
                <TextInput value={password} onChangeText={setPassword} secureTextEntry />
                <Button title="Register" onPress={register} />
            </View>
        );
    };

    export default RegisterScreen;