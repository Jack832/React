import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {

const { ButtonStyle, textStyle } = Styles;

   return (
   	<TouchableOpacity onPress={onPress} style={ButtonStyle} >
	<Text style={textStyle}>
	{children}
	</Text>
	</TouchableOpacity>	
	);
};

const Styles = {
	textStyle: {
	   paddingTop: 10,
       paddingBottom: 10,
       alignSelf: 'center',
       color: '#007aff',
       fontSize: 16,
       fontWeight: '600'
      
	},
   ButtonStyle: { 
alignSelf: 'stretch',
      flex: 1,
      borderRadius: 5,
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5

   }
};

export { Button };
