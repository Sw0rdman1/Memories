import { Text } from '@/components/ui/Themed'
import { Image } from 'expo-image'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router'
import Button from '@/components/ui/Button';

const WelcomeScreen = () => {
    const { bottom } = useSafeAreaInsets()
    const router = useRouter()

    const openQRScannerHandler = () => {
        router.push('/scan-qr')
    }

    return (
        <View style={styles.container}>
            <View style={[StyleSheet.absoluteFill, { backgroundColor: 'black', opacity: 0.4 }]} />
            <Image
                style={styles.bannerImage}
                source={require('../assets/images/banner2.jpg')}
            />
            <View style={[styles.contentContainer, { paddingBottom: bottom + 20 }]}>
                <Text style={[styles.title, { fontSize: 44, fontWeight: '800' }]}>
                    Memories
                </Text>
                <Text style={[styles.title, { marginBottom: 10 }]}>
                    that last, Stories that live on.
                </Text>
                <Button
                    title="Sign In"
                    onPress={() => { }}
                    icon={<FontAwesome name="sign-in" size={20} color="white" />}
                />
                <Button
                    title="Scan QR Code"
                    onPress={openQRScannerHandler}
                    inverted
                    icon={<AntDesign name="qrcode" size={24} color="#2C3E50" />}
                />
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    contentContainer: {
        padding: 25,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
    },
})