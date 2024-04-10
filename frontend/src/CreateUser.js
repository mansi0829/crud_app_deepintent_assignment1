import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_USER_MUTATION, GET_ALL_USERS_QUERY } from './graphql'; 

const CreateUser = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        phonenumber: ''
    });

    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
    const { refetch } = useQuery(GET_ALL_USERS_QUERY);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await createUser({
                variables: {
                    user: formState
                }
            });
            console.log('User created:', data.createUser);
            refetch();
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div className="flex justify-center mt-8">
            <form onSubmit={handleSubmit} className="w-96 p-8 bg-gray-200 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Create User</h2>
                <input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                />
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                />
                <input
                    type="text"
                    name="phonenumber"
                    value={formState.phonenumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Create User
                </button>
                {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
            </form>
        </div>
    );
};

export default CreateUser;
