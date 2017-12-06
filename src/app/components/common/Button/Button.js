import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styleConfig } from '../../../config';

const Button = ({ icon, processing, onPress, text }) => {
    // Conditional rendering
    // that show a loading indicator during processing
    // or the button icon if processing = false
    const renderIcon = () => {
        if (processing) {
            return <ActivityIndicator color={styleConfig.whiteColor} size="small" style={{ marginRight: 10 }} />;
        }
        return <Entypo name={icon} size={23} style={styles.icon} />;
    };

    return (
        <View style={styles.formControl}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
                style={[styles.button, styleConfig.button, styleConfig.shadow]}>
                {renderIcon()}
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export { Button };

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    formControl: {
        marginBottom: 10
    },
    icon: {
        alignSelf: 'center',
        color: styleConfig.whiteColor,
        marginRight: 10
    },
    text: {
        color: styleConfig.whiteColor,
        fontSize: 18
    }
});
