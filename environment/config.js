import { Dimensions, PixelRatio, Platform } from 'react-native';

const config = {
    
    BASE_URL:"https://northwind.vercel.app/",

}

const scale = PhoneWidth / 320;
export const responsiveSize = (size) => {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const PhoneHeight = Dimensions.get("window").height;
export const PhoneWidth  = Dimensions.get("window").width;
export default config;
