import {ReactNode} from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Group: {id: string};
  About: undefined;
};

type HomeScreenParams = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type GroupScreenParams = NativeStackNavigationProp<RootStackParamList, 'Group'>;
type AboutScreenParams = NativeStackNavigationProp<RootStackParamList, 'About'>;

type GroupScreenRouteProp = RouteProp<RootStackParamList, 'Group'>;

type HeaderProps = {
  heading: string;
  withSearch?: boolean;
  withImage?: boolean;
};

type HeaderAndroidProps = {
  heading: string;
  withSearch?: boolean;
  withSettings?: boolean;
};

type AboutHeaderProps = {
  heading: string;
};

type GroupLinkProps = {
  title: string;
};

type SubjectCardProps = {
  title: string;
  timeStart: string;
  timeEnd: string;
  teacher: string;
  audience: string;
  type: string;
};

type GroupHeaderProps = {
  title: string;
};

type AccordeonProps = {
  title: string;
  children: ReactNode | null;
};

type SearchBarProps = {
  withClearButton: boolean;
  onInputText?: Function;
};

export type RootStackParamTypes = RootStackParamList;

export type HomeScreenParamTypes = HomeScreenParams;
export type GroupScreenParamTypes = GroupScreenParams;
export type AboutScreenParamTypes = AboutScreenParams;
export type GroupScreenRoutePropList = GroupScreenRouteProp;

export type HeaderPropList = HeaderProps;
export type HeaderAndroidPropList = HeaderAndroidProps;
export type AboutHeaderPropList = AboutHeaderProps;
export type GroupLinkPropList = GroupLinkProps;
export type SubjectCardPropList = SubjectCardProps;
export type GroupHeaderPropList = GroupHeaderProps;
export type AccordeonPropList = AccordeonProps;
export type SearchBarPropList = SearchBarProps;
