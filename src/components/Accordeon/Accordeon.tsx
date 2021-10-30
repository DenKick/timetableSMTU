import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useTheme} from '@react-navigation/native';

import {AccordeonPropList} from '../../types/types';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordeon: React.FC<AccordeonPropList> = ({title, children}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const [isOpened, setIsOpened] = useState(false);

  const {colors} = useTheme();

  const rotateValue = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotateTo = () => {
    Animated.timing(rotateAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const rotateOut = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    isOpened ? rotateTo() : rotateOut();
    setIsOpened(!isOpened);
  };

  return (
    <View style={[styles.container, {borderBottomColor: colors.border}]}>
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={handlePress}
        activeOpacity={0.8}>
        <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
        <Animated.View style={{transform: [{rotate: rotateValue}]}}>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={colors.border}
            transform={{rotate: 90}}
          />
        </Animated.View>
      </TouchableOpacity>
      <View
        style={
          isOpened
            ? styles.openedChildrenContainer
            : styles.closedChildrenContainer
        }>
        {isOpened ? children : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  container: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  openedChildrenContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexGrow: 1,
    overflow: 'hidden',
  },
  closedChildrenContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Accordeon;
