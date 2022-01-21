FILE=$(basename $(git rev-parse --show-toplevel))

npm install -g expo-cli ts-node
shopt -s dotglob
expo init $FILE -t expo-template-blank-typescript
cd $FILE
rm -rf .git
rm .gitignore
rm babel.config.js
yarn add -D typescript prettier jest-cucumber eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser shelljs edit-json-file
cd ..
mv $FILE/* .
rm -rf $FILE
expo install react-native-reanimated react-native-gesture-handler react-native-redash
yarn