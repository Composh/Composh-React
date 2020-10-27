import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';

const customIcons = {};

export const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};

export default type => {
  switch (type) {
    case 'antdesign':
      return AntDesignIcon;
    case 'entypo':
      return EntypoIcon;
    case 'evilicon':
      return EvilIcon;
    case 'feather':
      return FeatherIcon;
    case 'font-awesome':
      return FAIcon;
    case 'font-awesome-5':
      return FA5Icon;
    case 'fontisto':
      return Fontisto;
    case 'foundation':
      return FoundationIcon;
    case 'ionicon':
      return Ionicon;
    case 'material-community':
      return MaterialCommunityIcon;
    case 'material':
      return MaterialIcon;
    case 'octicon':
      return OcticonIcon;
    case 'simple-line-icon':
      return SimpleLineIcon;
    case 'zocial':
      return ZocialIcon;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return MaterialIcon;
  }
};
