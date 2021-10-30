import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import {SearchBarPropList} from '../../types/types';

const SearchBar: React.FC<SearchBarPropList> = ({withClearButton}) => {
  const cancelAnim = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef<TextInput>(null);
  const isClearButton = withClearButton || false;

  const {colors} = useTheme();

  const cancelValue = cancelAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const cancelText = cancelAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '15%'],
  });

  const cancelIn = () => {
    Animated.timing(cancelAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const cancelOut = () => {
    Animated.timing(cancelAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleFocus = (): void => {
    isFocused ? cancelIn() : cancelOut();
    setIsFocused(!isFocused);
  };

  const handleCancelPress = (): void => {
    if (textInputRef.current) {
      textInputRef.current.clear();
      textInputRef.current.blur();
    }
  };

  return (
    <View style={styles.textInputContainer}>
      <View style={styles.searchIcon}>
        <FontAwesomeIcon icon={faSearch} color={colors.notification} />
      </View>
      <TextInput
        ref={textInputRef}
        keyboardAppearance={'dark'}
        keyboardType={'default'}
        style={[
          styles.searchBar,
          {backgroundColor: colors.card, color: colors.text},
        ]}
        placeholderTextColor={colors.notification}
        placeholder={'Search'}
        clearButtonMode={isClearButton ? 'always' : 'never'}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
      <Animated.View
        style={[
          styles.cancelTextContainer,
          {right: cancelValue, flexBasis: cancelText},
        ]}>
        <TouchableOpacity onPress={handleCancelPress} activeOpacity={0.6}>
          <Text
            numberOfLines={1}
            style={[styles.cancelText, {color: colors.primary}]}>
            Cancel
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  searchBar: {
    flex: 1,
    borderRadius: 7,
    padding: 10,
    paddingLeft: 35,
  },
  searchIcon: {
    alignSelf: 'center',
    position: 'absolute',
    padding: 10,
    zIndex: 1,
  },
  cancelTextContainer: {
    justifyContent: 'center',
  },
  cancelText: {
    overflow: 'hidden',
    alignSelf: 'flex-end',
  },
});

export default SearchBar;
