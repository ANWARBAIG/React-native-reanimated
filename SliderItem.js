import React, { useEffect } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import Animated,{
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const SliderItem = ({ image, index, currentIndex }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = currentIndex;
    console.log('     animated.value',animation.value)
  }, [currentIndex]);
  console.log('     animated.value',animation.value)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animation.value ==index || index==0 ? withSpring(2) : withSpring(.3),
        },
      ],
    };
  });

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
       
      }}
    >
      <Animated.Image
        source={image}
        style={[
          {
            width: 200,
            height: 200,
            resizeMode: 'contain',
          },
          animatedStyle
        ]}
      />
    </View>
  );
};

export default SliderItem;
