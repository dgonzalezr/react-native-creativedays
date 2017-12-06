import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DetailsItem } from '../../components/common';
// Global style
import { styleConfig } from '../../config';
// Helpers
import { titleCase } from '../../services/helpers';

class UserDetailsScreen extends Component {
    render() {
        const { navigation } = this.props;
        // Getting the user data from navigation params
        const { user } = navigation.state.params;

        return (
            <View style={styles.container}>
                <View style={[styles.avatarContainer, styleConfig.shadow]}>
                    <Image style={styles.avatar} source={{ uri: user.picture.large }} />
                    <Text style={styles.name}>
                        {titleCase(`${user.name.title}. ${user.name.first} ${user.name.last}`)}
                    </Text>
                </View>
                <ScrollView contentContainerStyle={{ backgroundColor: styleConfig.backgroundColor }}>
                    <View style={styles.detailsContainer}>
                        <DetailsItem icon="user" details={{ title: user.login.username }} />
                        <DetailsItem icon="mail" details={{ title: user.email }} />
                        <DetailsItem icon="phone" details={{ title: user.cell, subtitle: 'Mobile' }} />
                        <DetailsItem details={{ title: user.phone, subtitle: 'Phone' }} />
                        <DetailsItem
                            icon="location-pin"
                            details={{ title: titleCase(`${user.location.street}`), subtitle: 'Street' }}
                        />
                        <DetailsItem details={{ title: titleCase(`${user.location.city}`), subtitle: 'City' }} />
                        <DetailsItem details={{ title: titleCase(`${user.location.state}`), subtitle: 'State' }} />
                        <DetailsItem
                            details={{ title: titleCase(`${user.location.postcode}`), subtitle: 'Postal code' }}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export { UserDetailsScreen };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styleConfig.whiteColor
    },
    avatarContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: styleConfig.primaryColor
    },
    avatar: {
        height: 128,
        width: 128,
        borderRadius: 64,
        borderWidth: 2,
        borderColor: styleConfig.whiteColor,
        marginBottom: 20
    },
    name: {
        color: styleConfig.whiteColor,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    detailsContainer: {
        flex: 1,
        backgroundColor: styleConfig.whiteColor,
        paddingHorizontal: 10,
        paddingTop: 10
    }
});
