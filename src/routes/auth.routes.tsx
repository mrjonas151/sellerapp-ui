import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Recover from "../pages/Recover";
import Dashboard from "../pages/Dashboard";

const Stack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}} />
            <Stack.Screen name="Recover" component={Recover} options={{headerShown:false}} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}

export default AuthRoutes;