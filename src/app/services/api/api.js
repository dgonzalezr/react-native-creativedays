import axios from 'axios';

// Fetching users from: https://randomuser.me/api/?results=10&nat=US,DK,FR,GB&seed=react-native

const BaseURL = 'https://randomuser.me/api/';
const params = {
    results: 100,
    nat: 'US,DK,FR,GB',
    seed: 'react-native'
};

const fetchUsers = () =>
    axios.get(BaseURL, {
        params: params
    });

export { fetchUsers };
