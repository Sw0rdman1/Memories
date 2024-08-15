import Banner from '@/components/auth/Banner'
import LogInForm from '@/components/auth/LogInForm'
import SwitchForm from '@/components/auth/SwitchForm'
import { View } from '@/components/ui/Themed'
import { StyleSheet } from 'react-native'

const LogInScreen = () => {

    return (
        <View style={styles.container}>
            <Banner source={require('../assets/images/banner1.jpg')} height={250} />
            <LogInForm />
            <SwitchForm isLogin />

        </View>
    )
}

export default LogInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

})