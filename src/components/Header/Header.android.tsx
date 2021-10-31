import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme, useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faEllipsisV} from '@fortawesome/free-solid-svg-icons';

// import SearchBar from '../SearchBar/SearchBar';

import {AboutScreenParamTypes, HeaderAndroidPropList} from '../../types/types';

const Header: React.FC<HeaderAndroidPropList> = ({
  heading,
  withSearch,
  withSettings,
}) => {
  const isSettings = withSettings || false;
  const isSearch = withSearch || false;
  console.log(isSearch);

  const {colors} = useTheme();
  const navigation = useNavigation<AboutScreenParamTypes>();

  const handlePress = () => {
    navigation.navigate('About');
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <View style={styles.headingContainer}>
        <Text style={[styles.text, {color: colors.text}]}>{heading}</Text>
        <View style={styles.iconsContainer}>
          {isSearch ? (
            <TouchableOpacity
              onPress={handlePress}
              style={styles.iconContainer}>
              <FontAwesomeIcon size={16} icon={faSearch} color={colors.text} />
            </TouchableOpacity>
          ) : null}
          {isSettings ? (
            <TouchableOpacity
              onPress={handlePress}
              style={styles.iconContainer}>
              <FontAwesomeIcon
                size={20}
                icon={faEllipsisV}
                color={colors.text}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 85,
    fontSize: 24,
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
  iconsContainer: {
    flex: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default Header;
