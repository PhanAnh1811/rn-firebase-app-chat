import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import AddHomeScreen from '../screens/AddHomeScreen';
import HomeScreen from '../screens/HomeScreen';
import RoomScreen from '../screens/RoomScreen';
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Login' >
            <Stack.Screen  name='Login' component={LoginScreen} />
            <Stack.Screen  name='SignUp' component={SignUpScreen} />
            <Stack.Screen  name='AddHome' component={AddHomeScreen}/>
            <Stack.Screen nmae='Home' component={HomeScreen}/>
            <Stack.Screen name='Room' component={RoomScreen} />
        </Stack.Navigator>
    )
}

export default () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}