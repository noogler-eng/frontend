import { Dimesions, useWindowDimensions } from "react-native";

// snapshot — doesn't update on rotation!
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width > 600 ? 600 : width,
    height: height * 0.8,
  },
});

const MyComponent = () => {
  // re renders on rotation, returns current width and height
  // Prefer the hook for anything that must react to rotation/split-screen/foldables
  const { width, height } = useWindowDimensions();
  return <View style={{ width: width, height: height }} />;
};
