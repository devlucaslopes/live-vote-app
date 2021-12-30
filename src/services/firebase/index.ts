import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

import { SuggestionData } from '../../models/Suggestion'

const config = {
  apiKey: process.env.FIREBASE_API,
  authDomain: 'vote-app-bd79b.firebaseapp.com',
  projectId: 'vote-app-bd79b',
  storageBucket: 'vote-app-bd79b.appspot.com',
  messagingSenderId: '434688204540',
  appId: '1:434688204540:web:4657f990aa07071eaf8179'
}

const app = initializeApp(config)

const db = getFirestore(app)

export const getAllSuggestions = async () => {
  const suggestionsCol = collection(db, '/suggestions')
  const snapshot = await getDocs(suggestionsCol)

  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data()
      } as SuggestionData)
  )
}
