import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 6000,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FadeInView style={{ width: 250, height: 50 }}>
        <Text style={{ fontSize: 25, fontWeight:'bold', textAlign: 'center' }}>Global</Text>
     
      </FadeInView>
    </View>
  );
};
