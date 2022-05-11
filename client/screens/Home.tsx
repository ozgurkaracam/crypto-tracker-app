import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from "react-native";
import io from "socket.io-client";
import {dark, light, secondaryDark, secondaryLight} from "../utils/const";
import HomeCard from "../components/HomeCard";
import Crypto from "../interfaces/Crypto";
import {baseURL} from "../utils/const";

function Home({navigation}) {

    let [cryptos, setCryptos] = useState([])
    useEffect(() => {
        let socket = io(baseURL)
        socket.on("connect", () => {
            socket.on("crypto", (data) => {
                setCryptos(data.data)
            })
        })
    }, []);
    return (
        <View style={styles.container}>
            <FlatList data={cryptos} renderItem={({item})=>{
                return <HomeCard item={item} navigation={navigation} />
            }}   />
        </View>
    );
}

const crypto : Crypto[]=[
    {
        id:"1",
        symbol:"BTC",
        price:123123.33
    },
    {
        id:"2",
        symbol:"ETH",
        price:12312312.33
    },
    {
        id:"3",
        symbol:"TSW",
        price:3443534.33
    }
]

const styles = StyleSheet.create({

    container: {
        backgroundColor: dark,
        flex: 1
    },
})

export default Home;