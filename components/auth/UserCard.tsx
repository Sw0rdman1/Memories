import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
  FadeOutUp,
} from "react-native-reanimated";

interface UserCardProps {
  data: string;
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
  const user = {
    name: "Petar Petrović",
    image:
      "https://renemagrit.wordpress.com/wp-content/uploads/2018/05/son-of-man.jpg?w=315&h=393https://renemagrit.wordpress.com/wp-content/uploads/2018/05/son-of-man.jpg?w=315&h=393",
    dateOfBirth: "12.05.1954",
    dateOfDeath: "12.05.2021",
  };

  const onPressHandler = () => {
    router.replace("/home");
  };

  return (
    <Animated.View
      entering={FadeInDown.duration(300)}
      exiting={FadeOutUp.duration(300)}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={onPressHandler}
      >
        <Image source={{ uri: user.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{user.name}</Text>
          <Text style={styles.dates}>
            {user.dateOfBirth} - {user.dateOfDeath}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  touchableContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "center",
    gap: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  dates: {
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
  },
});
