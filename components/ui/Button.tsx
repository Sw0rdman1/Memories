import { useColors } from '@/hooks/useColors'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
    title: string
    onPress: () => void
    disabled?: boolean
    inverted?: boolean
    icon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled, inverted, icon }) => {
    const { tint } = useColors()

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[
                { backgroundColor: tint },
                styles.button,
                inverted && styles.buttonInverted,
                disabled && { backgroundColor: '#2C3E5060' },
            ]}
        >
            <Text style={[styles.text, inverted && { color: tint }]}>
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

})