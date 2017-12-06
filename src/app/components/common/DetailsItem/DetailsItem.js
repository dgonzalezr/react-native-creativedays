import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// Global style
import { styleConfig } from '../../../config';

const DetailsItem = ({ icon, details }) => {
    // render an icon ONLY for the first item details
    // of the same "category" (otherwire keep the indentation)
    const renderIcon = () => {
        if (icon) {
            return <Entypo name={icon} size={24} style={styles.icon} />;
        }
        return <View style={{ height: 24, width: 24, marginRight: 20 }} />;
    };

    // render subtitle ONLY if present
    const renderSubtitle = () => {
        if (details.subtitle) {
            return <Text style={styles.subtitle}>{details.subtitle}</Text>;
        }
    };

    return (
        <View style={styles.container}>
            {renderIcon()}
            <View style={styles.details}>
                <Text style={styles.title}>{details.title}</Text>
                {renderSubtitle()}
            </View>
        </View>
    );
};

export { DetailsItem };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    icon: {
        color: styleConfig.text.primaryColor,
        marginRight: 20
    },
    details: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: 10,
        borderBottomWidth: styleConfig.border.borderWidth,
        borderBottomColor: styleConfig.border.borderColor
    },
    title: {
        color: styleConfig.text.primaryColor,
        fontSize: 16
    },
    subtitle: {
        color: styleConfig.text.secondaryColor,
        fontSize: 14
    }
});
