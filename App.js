import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Account from './Screens/Account'
import Billing from './Screens/Billing'
import Home from './Screens/Home'
import Support from './Screens/Support'
import More from './Screens/More'
import { Colors } from './Components/Colors'
import { Ionicons, Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

const Tabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTintColor: Colors.black,
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        tabBarActiveTintColor: Colors.black,
      }}
    >
      <BottomTabs.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='Billing'
        component={Billing}
        options={{
          title: 'Billing',
          tabBarLabel: 'Billing',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='Account'
        component={Account}
        options={{
          title: 'Account',
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='Support'
        component={Support}
        options={{
          title: 'Support',
          tabBarLabel: 'Support',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='headset' size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='More'
        component={More}
        options={{
          title: 'More',
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Feather name='more-horizontal' color={color} size={35} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ZipplyMobile'
            component={Tabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
