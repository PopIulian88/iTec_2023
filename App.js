import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from  '@react-navigation/native-stack';

import Auth from "./components/Auth/Auth"
import Home from "./components/App/Home";

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name={"Auth"} component={Auth}/>
          <Stack.Screen
              name="Home"
              component={Home}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


