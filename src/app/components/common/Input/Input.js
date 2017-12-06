import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styleConfig } from '../../../config';

const Input = ({
    autoCapitalize,
    autoCorrect,
    keyboardType,
    iconName,
    onChange,
    placeholder,
    secureTextEntry,
    value
}) => {
    return (
        <View style={[styles.formControl, styleConfig.border, styleConfig.shadow]}>
            <Entypo name={iconName} size={24} style={styles.icon} />
            <TextInput
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                keyboardType={keyboardType}
                style={styles.input}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={styleConfig.text.secondaryColor}
                secureTextEntry={secureTextEntry}
                value={value}
                underlineColorAndroid="transparent"
            />
        </View>
    );
};

export { Input };

const styles = StyleSheet.create({
    formControl: {
        backgroundColor: styleConfig.whiteColor,
        flexDirection: 'row',
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    icon: {
        alignSelf: 'center',
        color: styleConfig.text.secondaryColor,
        marginRight: 10
    },
    input: {
        alignSelf: 'center',
        color: styleConfig.text.primaryColor,
        fontSize: 16,
        flex: 1,
        height: 25
    }
});
