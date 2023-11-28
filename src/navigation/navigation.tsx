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
      <Stack.Screen name="ScreenSearch" component={Search} />
      <Stack.Screen name="ScreenResults" component={Results} />
      <Stack.Screen name="ScreenDetail" component={Details} />
      
    </Stack.Navigator>
  );
}

export default NavigationApp;