# Use Node.js

```
$ nvm use v10.15.0
```

※ 動作確認済みのバージョンです

```
$ nvm version
```

出力結果
```
v10.15.0
```

# Install
## Install NPM Packages

```
$ npm install
```

## Install expo-cli

```
$ npm install -g expo-cli
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
