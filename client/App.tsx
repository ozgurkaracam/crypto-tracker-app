import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Detail from "./screens/Detail";
import {light,dark} from "./utils/const";
import axios from "axios";



export default function App() {


    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={Home} options={{
                    headerStyle:{
                        backgroundColor:light
                    }
                }} />
                <Stack.Screen name={"Detail"} component={Detail} options={{
                    headerStyle:{
                        backgroundColor:light
                    },
                    headerBackTitle:'',
                    headerTintColor:dark
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
