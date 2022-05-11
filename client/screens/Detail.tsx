import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator, useWindowDimensions} from "react-native";
import {useRoute} from "@react-navigation/native";
import axios from 'axios'
import {dark, light, primary, secondary, secondaryDark,secondaryLight} from "../utils/const";
import DetailLine from "../components/DetailLine";
import {HTMLSource, RenderHTML} from "react-native-render-html";
import {baseURL} from "../utils/const";



const InfoCard=({children}:{children:string})=>{
    const dimensions=useWindowDimensions()
    const source:string=`
    <p style="color: white">
    ${children}
</p>`
    return <View style={styles.headercard}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <RenderHTML contentWidth={dimensions.width} source={{html:source}} />

        </ScrollView>
    </View>
}

function Detail() {
    const {id}=useRoute().params
    const [loading,setLoading]=useState(true)
    const [mData,setmData]=useState({})
    const [pdata,setpdata]=useState({})
    useEffect(() => {
        setLoading(true)
        Promise.all([
            axios.get(`${baseURL}/marketdata/${id}`),
            axios.get(`${baseURL}/profile/${id}`),
        ]).then(([marketdata,profiledata])=>{
            setmData(marketdata.data.data.market_data)
            setpdata(profiledata.data.data)
        }).catch(([marketerror,profileerror])=>{
            alert('ERROR !')
        }).finally(()=>{
            setLoading(false)
        })
    }, [id]);

    if(loading)
        return <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:dark}}>
            <ActivityIndicator color={secondaryLight} size={"large"} />
        </View>

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headercard}>
                <Text style={styles.headerLeftTitle}>
                    {pdata.name}
                </Text>
                <View>
                    <DetailLine leftText="Percent Change Usd For 24 Hours"
                                rightText={mData.percent_change_usd_last_24_hours} />
                    <DetailLine leftText="Percent Change BTC For 24 Hours"
                                rightText={mData.percent_change_btc_last_24_hours} />
                    <DetailLine leftText="Percent Change ETH For 24 Hours"
                                rightText={mData.percent_change_eth_last_24_hours} />
                </View>
            </View>
            <InfoCard>
                {pdata.profile.general.overview.project_details}
            </InfoCard>
            <InfoCard>
                {pdata.profile.general.background.background_details}
            </InfoCard>
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    text:{
        fontSize:30
    },
    headerLeftTitle:{
      color:secondaryDark,
        fontSize:20,
        fontWeight:"900",
    },
    container:{
        backgroundColor:dark,
        flex:1,

    },
    headercard:{
        padding:15,
        margin:10,
        backgroundColor:light,
        borderRadius:15
    }
})

export default Detail;