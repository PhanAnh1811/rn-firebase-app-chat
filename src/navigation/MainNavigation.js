import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AddRoomScreen from '../screens/AddRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import RoomScreen from '../screens/RoomScreen';
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{headerShown:false}} name='Login' component={LoginScreen} />
            <Stack.Screen options={{headerShown:false}} name='Signup' component={SignupScreen} />
            <Stack.Screen options={{headerShown:false}} name='AddRoom' component={AddRoomScreen}/>
            <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen}/>
            <Stack.Screen options={{headerShown:false}} name='Room' component={RoomScreen} />
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