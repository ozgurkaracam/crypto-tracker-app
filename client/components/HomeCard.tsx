import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {dark, light, secondaryLight} from "../utils/const";
import {useNavigation} from "@react-navigation/native";

function HomeCard({navigation,item:{id,symbol,price}}:{item:{id:string,symbol:string,price:number}}) {
    return (
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Detail",{id})
        }}>
            <View style={styles.card}>
                <Text style={styles.textLeft}>
                    {symbol}
                </Text>
                <Text style={styles.textRight}>
                    $ {Math.floor(price*100)/100}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: light,
        paddingVertical: 30,
        paddingHorizontal:25,
        margin: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    container: {
        backgroundColor: dark,
        flex: 1
    },
    textLeft: {
        fontSize: 20,
        color:dark,
    },
    textRight: {
        fontSize: 25,
        fontWeight: 'bold',
        color: secondaryLight
    }
})
export default HomeCard;