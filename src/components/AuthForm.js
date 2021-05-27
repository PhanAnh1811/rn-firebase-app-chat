import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import Colors from '../utils/Colors'
const AuthForm = ({ secureTextEntry, label, icon, right,...custom }) => {
    return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder={label}
                mode='flat'
                secureTextEntry={secureTextEntry}
                underlineColor={Colors.purple}
                left={
                    <TextInput.Icon
                        name={icon}
                        size={24}
                        color={Colors.purple}
                    />
                }
                right={right}
                {...custom}
            />

        </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    textInput: {
        backgroundColor:'#ffffff',
        marginBottom: 30,
        marginLeft: 50,
        marginRight: 50,
    },
})
