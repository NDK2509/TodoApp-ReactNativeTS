import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, WordListScreen} from './screens';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <TodosScreen/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WordList" component={WordListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App
