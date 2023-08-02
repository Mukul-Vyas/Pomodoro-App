import React from "react";
import { Text ,View,StyleSheet } from "react-native";

export type TimerModes ="Focus" | "Break";

type Props={
    timerMode: TimerModes;
}

export const TimerModeDisplay:React.FC<Props>=({timerMode})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.TimerModetext}> 
            {timerMode} Time {timerMode == 'Focus' ? '🍅' : '🥬' }
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        width:'100%'
    },
    TimerModetext:{
        fontSize:40,
        fontWeight:'800',
        color:"#fff",
    }
})