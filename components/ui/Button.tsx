import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
    title: string
    onPress: () => void
    inverted?: boolean
    icon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ title, onPress, inverted, icon }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                inverted && styles.buttonInverted,
            ]}
        >
            <Text style={[styles.text, inverted && styles.textInverted]}>
                {title}
            </Text>
            {icon && <View style={{ marginLeft: 10 }}>{icon}</View>}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: '#2C3E50',
        height: 50,
        justifyContent: 'center',
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonInverted: {
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    textInverted: {
        color: '#2C3E50',
    },
})