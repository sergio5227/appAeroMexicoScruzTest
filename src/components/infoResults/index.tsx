import React from 'react'
import { Text, View } from 'react-native';

interface InfoResultsProps{
    origin:string
    result:number
}

const InfoResults = (props:InfoResultsProps) => {
    const {origin,result}=props
  return (
    <View style={{flexDirection:'row', paddingHorizontal:20}}> 
        <View style={{flex:1}}>
          <Text style={{fontSize:14,fontWeight:'600', lineHeight:20, color:'black'}}>{origin}</Text>
        </View>
        <View style={{flex:1, alignItems:'flex-end'}}>
          <Text style={{fontSize:14,fontWeight:'400', lineHeight:20, textAlign:'right', color:'rgba(0, 0, 0, 0.5)'}}>{result} results</Text>
        </View>
      </View>
  )
}

export default InfoResults;