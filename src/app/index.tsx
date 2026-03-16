import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-red-500">Hello There !</Text>
      <Image
        source={require('../../assets/images/icon.png')}
        style={{ height: 100, width: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
