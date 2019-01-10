# Use Node.js

```
$ nvm use v8.3.0
```

※ 動作確認済みのバージョンです

# Install
## Install expo-cli

```
$ npm install -g expo-cli
```

## Install NPM Packages

```
$ npm install
```

# Setup
## Setting firebase config

```
$ vim app.json
```

```
"extra": {
  "firebase": {
    "apiKey": "",
    "authDomain": "",
    "databaseURL": "",
    "projectId": "",
    "storageBucket": "",
    "messagingSenderId": ""
  }
},
```

Firebaseのウェブアプリで取得した値を使います

https://firebase.google.com/docs/web/setup?hl=ja

# Run expo

```
$ expo start
```
