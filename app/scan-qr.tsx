import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScanQRScreen() {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={'back'} />
            <View style={[styles.titleContainer]}>
                <Text style={styles.title}>Scan QR Code to relive memories</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    titleContainer: {
        position: 'absolute',
        top: 30,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        padding: 10,
    },
});
