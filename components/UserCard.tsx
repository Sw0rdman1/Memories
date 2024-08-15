import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface UserCardProps {
    data: string;
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
    const user = {
        name: 'Petar Petrović',
        image: 'https://renemagrit.wordpress.com/wp-content/uploads/2018/05/son-of-man.jpg?w=315&h=393https://renemagrit.wordpress.com/wp-content/uploads/2018/05/son-of-man.jpg?w=315&h=393',
        dateOfBirth: '12.05.1954',
        dateOfDeath: '12.05.2021',
    }


    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={{ uri: user.image }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.dates}>{user.dateOfBirth} - {user.dateOfDeath}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        gap: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    dates: {
        fontSize: 16,
        color: 'gray',
    },
})