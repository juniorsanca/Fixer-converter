import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from '../features/onboarding/landing/landing.screen';
import Login from '../features/onboarding/login/login.screen';
import Phone from '../features/onboarding/phone/phone.screen';
import Confirm from '../features/onboarding/confirm/confirm.screen';
const Stack = createNativeStackNavigator();

const rootContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="landing" component={Landing} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="phone" component={Phone} />
                <Stack.Screen name="confirm" component={Confirm} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default rootContainer;
