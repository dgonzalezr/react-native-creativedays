import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { styleConfig } from '../../../config';

const Loading = () => (
    <View style={styles.container}>
        <ActivityIndicator color={styleConfig.primaryColor} size="large" />
    </View>
);

export { Loading };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: styleConfig.backgroundColor,
        justifyContent: 'center'
    }
});
