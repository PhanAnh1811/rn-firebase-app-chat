import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Header({ title, iconName, navigation, screen }) {
    return (
        <View style={styles.header}>
            <View></View>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>{title}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate(screen) }}>
                <FontAwesome
                    name={iconName}
                    size={40}
                    style={{ color: 'white' }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#7500f7',

    }
})
