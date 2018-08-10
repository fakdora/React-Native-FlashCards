import React, { Component } from 'react'
import { View, Text, StyleSheet, 
	TouchableHighlight, TouchableOpacity } from 'react-native'


class Deck extends Component {

	handlePress = () => {
		alert('pressed')
	}

  render() {
  	const { title, numCards } = this.props
    return (
      <TouchableOpacity onPress={this.handlePress}>
      	<View style={styles.container}>
      	  <Text style={styles.titleText}>{ title }</Text>
      	  <Text style={styles.numCardText}>{ numCards } cards</Text>
      	</View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    //width: 100,
    margin:10,
    
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,

  },

  titleText: {
  	fontSize: 40,

  },

  numCardText: {
  	color: '#ccc',
  	fontSize: 18


  }
})

export default Deck
