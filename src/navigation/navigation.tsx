import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/search';
import Details from '../screens/detail';
import Results from '../screens/results';

export type navigationTypes = {
    ScreenSearch: undefined,
    ScreenResults: undefined,
    ScreenDetail: undefined,
   
  }

const Stack = createStackNavigator<navigationTypes>();

const NavigationApp = ()=> {
  return (
    <Stack.Navigator
        initialRouteName="ScreenSearch"
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name="ScreenSearch" options={{ title:"" }} component={Search} />
      <Stack.Screen name="ScreenResults" options={{ title:"" }} component={Results} />
      <Stack.Screen name="ScreenDetail" options={{ title:"" }} component={Details} />
      
    </Stack.Navigator>
  );
}

export default NavigationApp;