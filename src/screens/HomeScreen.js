import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header';

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Header title='Home' iconName='plus-square'/>
        </View>
    )
}

const styles = StyleSheet.create({})
