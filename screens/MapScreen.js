import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from './BottomSheet';

function MapScreen() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <MapView style={styles.map} />
            </View>
            <BottomSheet />
        </GestureHandlerRootView>
    );
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });