import React, { useEffect, useRef } from "react";
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";
import { themeSelector } from "../core/selectors/themeSelectors";

type Props = {
    width: number,
    height: number,
    style: ViewStyle
}

const Skeleton = (props: Props) => {
    const translateX = useRef(new Animated.Value(-props.width)).current
    const theme = useSelector(themeSelector)
useEffect(()=>{
    Animated.loop(
    Animated.timing(translateX, {
        toValue: props.width,
        useNativeDriver: true,
        duration: 1000
    })).start()
})
        return(
        <View
        style={StyleSheet.flatten([
        {width: props.width,height: props.height, backgroundColor: theme.colors.background[200], overflow: "hidden"},
        props.style
        ])}
        >
            <Animated.View
            style={{
                width: "100%",
                height: "100%",
                transform: [
                    {translateX: translateX}
                ]
            }}
            >
            <LinearGradient 
                    style={{width: "100%", height: "100%"}}
                    colors={["transparent", theme.colors.background[300], "transparent"]}
                    start={{x: 1, y: 1}}
                    />
            </Animated.View>

        </View>
        )
    }

export default Skeleton;