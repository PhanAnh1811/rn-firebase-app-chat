import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import CustomButtom from '../components/CustomButtom';

export default function AddHomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create a new chat room</Text>
            <View>
                <AuthForm label='Room name' />
            </View>
            <View>
                <CustomButtom 
                name='CREATE' 
                navigation={navigation}
                screen='Home'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:200,
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:40,
    }
})
