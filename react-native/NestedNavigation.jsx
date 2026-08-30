import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeListScreen} />
      <Stack.Screen name="details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* entire Home screen is nested within a Stack Navigator */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
