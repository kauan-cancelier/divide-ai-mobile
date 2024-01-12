import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../views/login/Login'
import NewUser from '../views/profile/NewUser'
import Profile from '../views/profile/Profile'
import NewProfile from '../views/profile/NewProfile'
import Contracts from '../views/contracts/Contracts'
import ShowContract from '../views/contracts/ShowContract'
import FindYourPartner from '../views/search/FindYourPartner'
import Messages from '../views/messages/Messages'
import ShowMessage from '../views/messages/ShowMessage'
import Carousel from '../views/search/Carousel'
import AvailabilityToLive from '../views/profile/AvailabilityToLive'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = props => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {backgroundColor: 'black'} }}>
            <Tab.Screen name="Search" options={{ title: 'Buscar' }}>
                {props => <FindYourPartner {...props} />}
            </Tab.Screen>

            <Tab.Screen name="Contracts" options={{ title: 'Contratos' }}>
                {props => <Contracts {...props} />}
            </Tab.Screen>

            <Tab.Screen name="Ofert" options={{ title: 'Ofertas' }}>
                {props => <Profile {...props} />}
            </Tab.Screen>

            <Tab.Screen name="Messages " options={{ title: 'Mensagens' }}>
                {props => <Messages {...props} />}
            </Tab.Screen>

            <Tab.Screen name="Profile" options={{ title: 'Perfil' }}>
                {props => <Profile {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="NewUser" component={NewUser}/>
            <Stack.Screen name="NewProfile" component={NewProfile}/>
            <Stack.Screen name="NewAvailabilityToLive" component={AvailabilityToLive}/>
            <Stack.Screen name="ShowContract" component={ShowContract}/>
            <Stack.Screen name="ShowMessage" component={ShowMessage}/>
            <Stack.Screen name="SwipeCarousel" component={Carousel}/>
            <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
    )
}

const black = {
    dark: false,
    colors: {
        primary: 'rgb(255, 255, 255)',
        background: 'rgb(0, 0, 0)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(255, 255, 255)',
        border: 'rgb(255, 255, 255)',
        notification: 'rgb(255, 69, 58)',
    },
}
const Navigator = () => {
    return (
        <NavigationContainer theme={black}>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default Navigator
