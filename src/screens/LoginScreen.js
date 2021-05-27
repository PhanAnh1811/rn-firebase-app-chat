import React,{useState} from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import AuthForm from '../components/AuthForm'
import CustomButtom from '../components/CustomButtom'
import Colors from '../utils/Colors'

const LoginScreen = ({ navigation }) => {
    const [hidePass,setHidePass]=useState(true);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to chat app</Text>
            <View >
                <AuthForm
                    label='Your Email'
                    icon='email'
                />

                <AuthForm
                    label='Your Password'
                    secureTextEntry={true}
                    icon='lock'
                    right={
                        <TextInput.Icon 
                            onPress={()=>setHidePass(!hidePass)}
                            name={hidePass?'eye-off':'eye'}
                            size={24}
                            color={Colors.purple}
                        />
                    }
                    secureTextEntry={hidePass}
                />

            </View>
            <CustomButtom
                name='LOGIN'
                navigation={navigation}
                screen='Home'
            />
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{
                        color: 'purple',
                        textAlign: 'center',
                        fontSize: 20,
                        marginTop: 20,
                    }}>
                        New user? Join here
                        </Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 100,
        marginBottom: 30,
    },
})