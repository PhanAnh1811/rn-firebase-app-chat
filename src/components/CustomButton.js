import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import Colors from '../utils/Colors'



export default function CustomButton({ name, navigation, screen,modeValue,...res }) {
    return (
        <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25,
                    color: 'white',
                    marginTop: 5,
                    fontWeight:'bold'
                }}> {name} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.purple,
        width: 120,
        height: 50,
        marginLeft: 120,
        borderRadius: 20,
    },
})
