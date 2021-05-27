import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-paper'

//icons
import FontAweSome from 'react-native-vector-icons/FontAwesome'

//components
import AuthForm from '../components/AuthForm'
import CustomButton from '../components/CustomButton'
import Colors from '../utils/Colors'
const SignupScreen = ({ navigation }) => {
    const[hidePass,setHidePass]=useState(true);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTER APP CHAT</Text>
            <View>
                <AuthForm
                    label='Email'
                    icon='email'
                />
                <AuthForm
                    label='Password'
                    icon='lock'
                    right={
                        <TextInput.Icon 
                            name={hidePass?'eye-off':'eye'}
                            size={24}
                            color={Colors.purple}
                            onPress={()=>setHidePass(!hidePass)}
                        />
                    }
                    secureTextEntry={hidePass}
                />
            </View>
            <CustomButton name='Sign up' />
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <FontAweSome
                    name="arrow-left"
                    onPress={() => navigation.navigate('Login')}
                    size={40}
                    style={{paddingRight:30}}
                    color={Colors.purple}
                />
            </View>

        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color:Colors.purple
    }
})
