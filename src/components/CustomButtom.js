import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default function CustomButtom({ name, navigation, screen }) {
    return (
        <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 30,
                    color: 'white',
                    marginTop: 5
                }}> {name} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#8e44ad',
        width: 200,
        height: 50,
        marginLeft: 100,
        borderRadius: 10

    },
})
