import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {decrement, increment, loginActions} from '../store/slices/counterSlice';
import Icon, {IconFuwudingjia} from '../assets/iconfont/index';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface IProps {
  children?: React.ReactNode;
}

const HomeScreen: React.FC<IProps> = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const value = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Icon name="icon-fapiao" size={30} color="#900" />
      <IconFuwudingjia size={80} color="pink" />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you',
          })
        }
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Text>{value}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="rtk login" onPress={() => dispatch(loginActions(123))} />
    </View>
  );
};

export default memo(HomeScreen);
