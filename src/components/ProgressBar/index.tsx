import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BounceIn, FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Feather } from "@expo/vector-icons";
import { styles } from './styles';
import { PropsProgressBar } from './types';
import Animated from 'react-native-reanimated';

const ProgressBar = ({ value, onMoveTop }: PropsProgressBar) => {
    const widthContainer = useSharedValue(200);

    const endReached = value >= 95;

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: widthContainer.value
        }
    });

    const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

    useEffect(() => {
        widthContainer.value = withSpring(endReached ? 56 : 200, { mass: 0.4 });
    }, [value])


    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            {endReached ?
                <TouchableOpacityAnimated
                    entering={BounceIn}
                    exiting={FadeOut}
                    onPress={onMoveTop}
                >
                    <Feather name='arrow-up' size={24} color="#c4c4cc" />
                </TouchableOpacityAnimated>
                :
                <Animated.View
                    style={[styles.progressContent]}
                    entering={FadeIn}
                    exiting={FadeOut}
                >
                    <Text style={styles.value}>{value.toFixed(0)}%</Text>

                    <View style={styles.tracker}>
                        <View style={[styles.progress, { width: `${value}%` }]} />
                    </View>
                </Animated.View>
            }
        </Animated.View>
    );
};

export { ProgressBar };