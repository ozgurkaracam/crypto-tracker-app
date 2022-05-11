import React from 'react';
import {Text, View} from "react-native";
import {secondaryLight,primary,dark} from "../utils/const";

function DetailLine({leftText,rightText}:{leftText:string,rightText:number}) {
    return (
        <View style={{flexDirection:"row",marginVertical:10,justifyContent:"space-between",alignItems:'center'}}>
            <Text style={{color:dark,fontSize:15}}>
                {leftText}
            </Text>
            <Text style={{color:rightText.toString()[0]=="-" ? 'darkred' : "darkgreen",fontSize:20}}>
                {Math.floor(rightText*100)/100} %
            </Text>
            <Text>
            </Text>
        </View>
    );
}


export default DetailLine;