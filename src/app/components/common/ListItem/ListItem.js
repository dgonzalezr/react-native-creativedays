import React from 'react';
import { Image, Platform, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// Global style
import { styleConfig } from '../../../config';
// Helpers
import { titleCase } from '../../../services/helpers';

const ListItem = ({ user, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={{ paddingHorizontal: 5 }}>
            <View style={[styles.container, styleConfig.border, styleConfig.shadow]}>
                <Image style={styles.avatar} source={{ uri: user.picture.medium }} />
                <View
                    style={{
                        // inline style
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                    <Text style={styles.title}>
                        {titleCase(`${user.name.title}. ${user.name.first} ${user.name.last}`)}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name={'email'} size={16} style={styles.icon} />
                        <Text style={styles.subtitle}>{user.email.split('@')[0]}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Entypo name={'chevron-right'} size={30} style={{ color: styleConfig.primaryColor }} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export { ListItem };

const styles = StyleSheet.create({
    container: {
        backgroundColor: styleConfig.whiteColor,
        flexDirection: 'row',
        marginVertical: 3,
        padding: 10
    },
    avatar: {
        borderRadius: 25,
        marginRight: 10,
        height: 50,
        width: 50
    },
    title: {
        color: styleConfig.text.primaryColor,
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        color: styleConfig.text.secondaryColor,
        marginRight: 5
    },
    subtitle: {
        color: styleConfig.text.secondaryColor,
        fontSize: 16
    }
});
