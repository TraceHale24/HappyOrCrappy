import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Gesture, GestureDetector, Pressable } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
  } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

function BottomSheet() {
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y:0 });
    const navigation = useNavigation();

    function buttonPressHandler() {
        navigation.navigate('MenuScreen', {});
    }

    const gesture = Gesture.Pan().onStart(() => {
        context.value = { y: translateY.value };
    }).onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
                <Pressable onPress={buttonPressHandler} style={styles.button}>
                    <Button title="Press me" />
                </Pressable>
            </Animated.View>
        </GestureDetector>
    );
}

export default BottomSheet;

const styles = StyleSheet.create({
    bottomSheetContainer: {
      height: SCREEN_HEIGHT,
      width: '100%',
      backgroundColor: 'white',
      position: 'absolute',
      top: SCREEN_HEIGHT / 1.5,
      borderRadius: 25,
    },
    button: {
        marginTop: 100,
    }
});