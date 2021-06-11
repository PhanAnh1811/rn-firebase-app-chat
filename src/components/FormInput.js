import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { TextInput } from 'react-native-paper'
import Colors from '../utils/Colors'
export default function FormInput({
    value,
    secureTextEntry,
    onChangeText,
    label,
    icon,
    right,
    ...res }) {
        
        const {width,height}=Dimensions.get('screen')
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
                onChangeText={onChangeText}
                value={value}
                {...res}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#ffffff',
        marginBottom: 30,
        marginLeft: 50,
        marginRight: 50,
    },
})
