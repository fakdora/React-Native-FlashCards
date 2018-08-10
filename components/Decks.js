import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView,
  FlatList } from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'


class Decks extends Component {

  renderItem = ({ item }) => {    
    return (
      <Deck 
        title={ item.title }
        numCards={ item.numCards } />
    )}

  render() {
    const { decks } = this.props

    return (
      <View>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
})

function mapStateToProps ({ decks }) {
  console.log('decks: ', decks)
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)
