import React from 'react'
import { Text, View } from 'react-native';
import { InfoResultsStyle } from '../../styles';

interface InfoResultsProps{
    origin:string
    result:number
}

const InfoResults = (props:InfoResultsProps) => {
    const {origin,result}=props
  return (
    <View style={InfoResultsStyle.content}> 
        <View style={{flex:1}}>
          <Text style={InfoResultsStyle.text1}>{origin}</Text>
        </View>
        {result > 1 ?<View style={InfoResultsStyle.content1 }>
          <Text style={InfoResultsStyle.text2}>{result} results</Text>
        </View> : null}
      </View>
  )
}

export default InfoResults;