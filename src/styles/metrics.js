import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePAdding: 20,
  baseMArgin: 10,
  baseRadius: 3,
  screenWidth: width < height ? width : height,
  screeHeight: width < height ? height : width,
};
