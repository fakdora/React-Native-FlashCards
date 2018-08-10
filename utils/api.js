import { AsyncStorage } from 'react-native'


const DECK_STORAGE_KEY = 'UdacityFlashCards:decks'


export function submitDeck (deck) {
	alert (JSON.stringify({
		deck
	}))
	return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
		deck
	}))
}

export function removeDeck () {
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then((results) => {
			const data = JSON.parse(results)
			data[key] = undefined
			delete data[key]
			AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
		})
}
