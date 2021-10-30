import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme, useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

import SearchBar from '../SearchBar/SearchBar';

import {AboutScreenParamTypes, HeaderPropList} from '../../types/types';

const Header: React.FC<HeaderPropList> = ({heading, withSearch, withImage}) => {
  const isImage = withImage || false;
  const isSearch = withSearch || false;

  const {colors} = useTheme();
  const navigation = useNavigation<AboutScreenParamTypes>();

  const handlePress = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={[styles.text, {color: colors.text}]}>{heading}</Text>
        {isImage ? (
          <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
            <FontAwesomeIcon
              size={24}
              icon={faQuestionCircle}
              color={colors.text}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.searchContainer}>
        {isSearch ? <SearchBar withClearButton /> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 34,
    fontWeight: '300',
  },
  container: {
    paddingVertical: 15,
  },
  headingContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    width: '100%',
  },
  iconContainer: {
    alignSelf: 'center',
  },
});

export default Header;
