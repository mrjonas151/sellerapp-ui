import React from "react";
import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes(){
    const isAutenticated = false;
    const loading = false;

    if(loading){
        return(
            <View style = {{flex:1, 
                backgroundColor:'#323232', 
                justifyContent: 'center', 
                alignItems: 'center'
                }}
            >
            <ActivityIndicator size={60} color='#FFD700'/>
            </View>
        );
    }

    return(
        isAutenticated ? <AppRoutes/> : <AuthRoutes/>
    );
}


export default Routes;