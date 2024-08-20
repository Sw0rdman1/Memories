import { useColors } from "@/hooks/useColors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileHeader = ({ user }: { user: any }) => {
  const { top } = useSafeAreaInsets();
  const { tint } = useColors();

  const goBackHandler = () => {
    router.back();
  };

  return (
    <View style={[styles.header, { paddingTop: top, backgroundColor: tint }]}>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={goBackHandler}
      >
        <Ionicons name="chevron-back-outline" size={28} color="white" />
      </TouchableOpacity>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.dates}>
          {user.dateOfBirth} - {user.dateOfDeath}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    height: 300,
    paddingHorizontal: 5,
    alignItems: "center",
    flexDirection: "row",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  touchableContainer: {
    padding: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "center",
    gap: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  dates: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
});
