import { Share } from "react-native";

printLog = (...data) => {
  if (__DEV__) {
    console.log(data);
  }
};

const onShare = async (msg) => {
  try {
    const result = await Share.share({
      message: msg,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

export const utils = {
  printLog,
  onShare,
};
