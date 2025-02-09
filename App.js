import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapScreen from './screens/MapScreen';
import MenuScreen from './screens/MenuScreen';
import BottomSheet from './screens/BottomSheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false}} />
          <Stack.Screen name="MenuScreen" component={MenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
