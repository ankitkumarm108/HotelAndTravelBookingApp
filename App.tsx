import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from './src/screens/SearchScreen'
import { Screen } from './src/assets/variables'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  const RootStack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={Screen.SearchScreen} component={SearchScreen} />
      </RootStack.Navigator>
      </NavigationContainer>
  )
}

export default App