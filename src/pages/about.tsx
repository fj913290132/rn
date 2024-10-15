import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface IProps {
  children?: React.ReactNode;
}
type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;
const About: React.FC<IProps> = () => {
  const navigator = useNavigation<DetailsScreenNavigationProp>();
  return (
    <View>
      <Text>About Screen</Text>
      <Button title="Go to Home" onPress={() => navigator.navigate('Home')} />
    </View>
  );
};

export default memo(About);
