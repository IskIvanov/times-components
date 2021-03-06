import { StyleSheet } from "react-native";
import sharedStyles from "./shared";

const styles = StyleSheet.create({
  ...sharedStyles,
  title: {
    ...sharedStyles.title,
    top: 1
  },
  iconContainer: {
    ...sharedStyles.iconContainer,
    paddingBottom: 0
  }
});

export default styles;
