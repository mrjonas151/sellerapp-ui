import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const Stack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
        </Stack.Navigator>
    );
}

export default AuthRoutes;