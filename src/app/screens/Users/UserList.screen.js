import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, ListItem, Loading } from '../../components/common';

import { fetchUsers } from '../../services/api/api';
import { styleConfig } from '../../config/index';

class UserListScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { users: [] };

        this.renderUserItem = this.renderUserItem.bind(this);
        this.onUserItemPress = this.onUserItemPress.bind(this);
    }

    componentWillMount() {
        fetchUsers()
            .then(response => {
                const { results } = response.data;
                this.setState({ users: results });
            })
            .catch(error => console.log(error));
    }

    // Will render a ListItem component for each user
    // inside the FlatList component
    renderUserItem({ item }) {
        return <ListItem user={item} onPress={() => this.onUserItemPress({ user: item })} />;
    }

    // Handler for when a user item is pressed
    onUserItemPress({ user }) {
        const { navigation } = this.props;
        // Navigate to UserDetails LoginScreen
        // and pass the user data
        // (same as navigation.navigate('UserDetails', { user: user }); )
        navigation.navigate('UserDetails', { user });
    }

    render() {
        // Show the Loading component while fecthing
        // the list of users
        if (!this.state.users.length) {
            return <Loading />;
        }
        return (
            <FlatList
                data={this.state.users}
                keyExtractor={item => item.id.value}
                renderItem={this.renderUserItem}
                contentContainerStyle={styles.container}
            />
        );
    }
}

export { UserListScreen };

const styles = StyleSheet.create({
    container: {
        backgroundColor: styleConfig.backgroundColor
    }
});
