import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { TextInput} from 'react-native-paper'

import AuthForm from '../components/AuthForm'
import CustomButton from '../components/CustomButton'
import Colors from '../utils/Colors'

const LoginScreen = ({ navigation }) => {
    const [hidePass, setHidePass] = useState(true);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>WELCOME TO APP CHAT</Text>
            <View >
                <AuthForm
                    label='Email'
                    icon='email'
                />

                <AuthForm
                    label='Password'
                    secureTextEntry={true}
                    icon='lock'
                    right={
                        <TextInput.Icon
                            onPress={() => setHidePass(!hidePass)}
                            name={hidePass ? 'eye-off' : 'eye'}
                            size={24}
                            color={Colors.purple}
                        />
                    }
                    secureTextEntry={hidePass}
                />

            </View>
            <CustomButton
                name='Sign in'
                navigation={navigation}
                screen='AddRoom'
            />
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.reset}>New user? Join here</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 100,
        marginBottom: 30,
        color:Colors.purple
    },
    reset:{
        fontSize:20,
        color:Colors.purple,
        textAlign:'center',
        marginTop:20,
        fontWeight:'bold',
        paddingRight:40,
    }
})