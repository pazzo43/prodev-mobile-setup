npx create-expo-app@latest prodev-mobile-app-0x03
cd prodev-mobile-app-0x03
npm run reset-project

mkdir -p assets/images

mkdir styles
touch styles/index.tsx

export { styles };

import { styles } from "@/styles";

import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}


npx expo install @expo/vector-icons

<View style={styles.passwordGroup}>
  <TextInput style={{ flex: 1 }} />
  <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
</View>

npx expo start

