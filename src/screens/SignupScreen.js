import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

//icons
import FontAweSome from 'react-native-vector-icons/FontAwesome'

//components
import AuthForm from '../components/AuthForm'
import CustomButtom from '../components/CustomButtom'
const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Register chat app</Text>
            <View>
                <AuthForm
                    label='Your Email'
                />
                <AuthForm
                    label='Your Password'
                    secureTextEntry={true}
                />
            </View>
            <CustomButtom name='SIGN UP' />
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <FontAweSome
                    name="arrow-left"
                    onPress={() => navigation.navigate('Login')}
                    size={40}
                />
            </View>

        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30
    }
})
