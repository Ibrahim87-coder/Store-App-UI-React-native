import React from 'react'
import { View, Text, Image } from 'react-native'
import { colors } from '../../colors'

const LoadingPage = ({navigation}) => {
   
    setTimeout(() => {
        navigation?.navigate("Tabs")
    }, 3000);
    return (
        <View style={{ backgroundColor: colors.green,flex:1,justifyContent:'center',alignItems:'center' }}>
            <Image source={require("../../images/shop-icon.jpg")} style={{height:150,width:150,margin:10}} />
            <Text style={{color:colors.white,fontWeight:'bold',fontSize:30}}>{"Store Market"}</Text>
        </View>
    )
}

export default LoadingPage
