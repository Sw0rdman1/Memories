import ProfileHeader from "@/components/main/ProfileHeader";
import { View } from "@/components/ui/Themed";
import { StyleSheet } from "react-native";

const user = {
  name: "Petar Petrović",
  image:
    "https://renemagrit.wordpress.com/wp-content/uploads/2018/05/son-of-man.jpg?w=315&h=393https://renemagrit.wordpress.com/wp-content/uploads/2018/05/son-of-man.jpg?w=315&h=393",
  dateOfBirth: "12.05.1954",
  dateOfDeath: "12.05.2021",
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader user={user} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
