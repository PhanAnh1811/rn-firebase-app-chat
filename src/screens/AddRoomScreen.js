import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import AuthForm from '../components/AuthForm';
import CustomButtom from '../components/CustomButton';

import useStatusBar from '../utils/useStatusBar'
import firestore from '@react-native-firebase/firestore'

import Colors from '../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function AddRoomScreen({ navigation }) {
    useStatusBar('dark-content')
    const [roomName, setRoomName] = useState('');


    function _handleCreateChatRoom() {
        if (roomName.length > 0) {
            firestore().collection('THREADS').add({
                name: roomName,
                lastesMessage: {
                    text: `You have joined the room ${roomName}.`,
                    createdAt: new Date().getTime()
                }
            })
                .then(docRef => {
                    docRef.collection('MESSAGES').add({
                        text: `You have joined the room ${roomName}.`,
                        createdAt: new Date().getTime(),
                        system: true
                    })
                    navigation.navigate('Home');
                })
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.closeButtonContainer}>
                <AntDesign
                    name='closecircle'
                    size={40}
                    color={Colors.purple}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Text style={styles.header}>CREATE A NEW ROOM CHAT</Text>
            <View>
                <AuthForm
                    label='Room name'
                    value={roomName}
                    onChangeText={(text)=>setRoomName(text)}
                />
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
    container: {
        marginTop: 200,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        color: Colors.purple
    },
    closeButtonContainer: {
        flex: 1,
        position: 'absolute',
        bottom: 350,
        zIndex: 1,
        left: 5,
    }
})
