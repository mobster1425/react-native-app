


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllPlaces from "../screens/HomeScreen";
import AddPlace from "../screens/AddPlaceScreen";
import Profile from "../screens/ProfileScreen";
import PlaceDetails from "../screens/PlaceDetailsScreen";
import Map from "../screens/MapScreen";
import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          color:COLORS.tertiary
        //  top: 10,
        },
        tabBarStyle: {
          display: "flex",
        },
      }}
    >
      <Tab.Screen
        name="AllPlaces"
        component={AllPlaces}
        options={{
          tabBarLabel: "Home",
          
        }}
      />
      <Tab.Screen
        name="AddPlace"
        component={AddPlace}
        options={{
          tabBarLabel: "AddPlace",
        }}
      />
       
 <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
        }}
      />

      {/* Add more Tab.Screen components as needed */}
    </Tab.Navigator>
  );
};

export default HomeNavigation;


/*
       <Tab.Screen
        name="PlaceDetails"
        component={PlaceDetails}
        options={{
          tabBarLabel: "PlaceDetails",
        }}

<Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: "Map",
        }}
      />

      />*/


















/*


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/HomeScreen";
import AddPlace from "../screens/AddPlaceScreen";
import Profile from "../screens/ProfileScreen";


const Tab=createBottomTabNavigator();

const HomeNavigation=()=>{
    return(
        <Tab.Navigator
			initialRouteName='Home'
			tabBarOptions={{
				//activeTintColor: Theme.primaryLight,
				style: {
					position: 'absolute',
					bottom: 25,
					left: 20,
					right: 20,
					elevation: 0,
					backgroundColor: '#D7CABD',
					borderRadius: 15,
					height: 60,
				},
				labelStyle: {
					fontSize: 15,
					top: 10,
				},
			}}>
			//{ tabBar={props => <MyTabBar {...props} />}}
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarLabel: 'Home',
				}}
			/>
			<Tab.Screen
				name='AddPlace'
				component={AddPlace}
				options={{
					tabBarLabel: 'Profile',
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarLabel: 'Profile',
				}}
			/>
		</Tab.Navigator>
    )
}

export default HomeNavigation;

*/