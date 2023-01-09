import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Details from '../Screens/Details';
import Register from '../Screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={Register} />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}

export default AppRoutes;
