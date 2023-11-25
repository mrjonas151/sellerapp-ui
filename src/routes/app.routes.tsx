import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";
import Recover from "../pages/Recover";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dashboard" component={Dashboard}/>
                <Stack.Screen name="Recover" component={Recover} />
            </Stack.Navigator>
        </NavigationContainer>

        
    );
}

export default AppRoutes;