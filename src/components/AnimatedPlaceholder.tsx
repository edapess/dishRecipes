import { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";

const AnimatedPlaceholder = () => {
    const fadeAnimation = useRef(new Animated.Value(0.3)).current
    console.log(fadeAnimation)
    useEffect(()=>{
        Animated.loop(
            Animated.timing(fadeAnimation,{
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            })
        ).start()
        setTimeout(() => {
            console.log('S T O P P E D');
            
            fadeAnimation.stopAnimation()
          }, 10000);
    },[])
    const interpolated = fadeAnimation.interpolate({
        inputRange: [0.3,0.5, 1],
        outputRange: [0.3, 0.5, 1],
      });
      
return (
    <Animated.View
    style={{
        width: 200,
        height: 200,
        opacity: interpolated,
        backgroundColor: 'red' 
    }}
    >
        <Text>AnimatedPlaceholder</Text>
    </Animated.View>
)
}


export default AnimatedPlaceholder;