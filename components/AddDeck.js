import React, { Component } from 'react'
import { 
	View, TouchableOpacity, Text, StyleSheet, 
	Platform, TextInput, YellowBox } from 'react-native'
import TextButton from './TextButton'
import { black } from '../utils/colors'
import { submitDeck, removeDeck } from '../utils/api'
import { timeToString, generateUID } from '../utils/helpers'
import { connect } from 'react-redux'
import { addDeck } from '../actions/decks'

function SubmitBtn ({ onPress }) {
	return (
		<TouchableOpacity
			onPress={onPress}>
 			<Text style={styles.submitBtnText}>SUBMIT</Text>
		</TouchableOpacity>
	)
}

class AddDeck extends Component {
	state = {
		title: '',
		id: generateUID(),

	}

	reset = () => {
		this.setState({title: ''})
	}

	submit = () => {
		// const key = timeToString()
		const deck = this.state

		// alert('submit: ' + this.state.title)
		// update redux
		this.props.dispatch(addDeck(deck))
		this.setState({
			title: '',
		})

		// navigate to home
		submitDeck(deck)
		

		// clear local notification
	}

	onChangeHandler = (title) => {
		this.setState({title})
	}

	render() {
		return (
			<View>
			<Text>What is the title of your new Deck?</Text>
			<TextInput
        		style={{height: 40, width:100, borderColor: 'gray', borderWidth: 1, marginTop: 50}}
        		onChangeText={this.onChangeHandler}
        		value={this.state.title}
        		editable = {true}
      		/>
	          <TextButton style={{padding: 10}} onPress={this.reset}>
	            Reset
	          </TextButton>
			<SubmitBtn onPress={this.submit} />
			</View>

		)

	}
}

const styles = StyleSheet.create({
	submitBtnText: {
	    color: black,
	    fontSize: 22,
	    textAlign: 'center',
	  },
})


export default connect()(AddDeck)
