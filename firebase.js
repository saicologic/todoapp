import { Constants } from 'expo';
import * as firebase from 'firebase';
import 'firebase/firestore';

class Firebase {
  constructor(config = {}) {
    firebase.initializeApp(config);
    this.firestore = firebase.firestore();
    this.firestore.settings({ timestampsInSnapshots: true });
  }

  addItem = async (content) => {
    return this.firestore.collection('items').add({
      content: content,
      createdAt: new Date(),
    }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);

    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  async getItems() {
    return this.firestore.collection('items')
      .orderBy('createdAt', 'asc')
      .get();
  }

  complteItem = async (item) => {
    this.firestore.collection('items').doc(item.itemId).delete()
    .then(function(docRef) {
      console.log("Document successfully deleted!");
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }
}

// app.jsonから設定の読み込み
const fire = new Firebase(Constants.manifest.extra.firebase);
export default fire;
