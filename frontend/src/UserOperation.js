import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER_MUTATION, DELETE_USER_MUTATION, GET_ALL_USERS_QUERY } from './graphql';

const UserOperation = () => {
    const [userIdInput, setUserIdInput] = useState('');
    const [formState, setFormState] = useState({
        id: '',
        username: '',
        email: '',
        phonenumber: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { loading, error, data, refetch } = useQuery(GET_ALL_USERS_QUERY);
    const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
        onCompleted: () => {
            refetch(); 
        }
    });
    const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
        onCompleted: () => {
            refetch(); 
        }
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('modal-open');
    };

    const handleUpdate = async (userId) => {
        const currentUser = data.getAllUsers.find(user => user.id === userId);
        setFormState(currentUser);
        openModal();
    };

    const handleUpdateSubmit = async (event) => {
        event.preventDefault();
        try {
            const { __typename, ...updatedUser } = formState;
            const { data } = await updateUser({
                variables: {
                    user: updatedUser
                }
            });
            console.log('User updated:', data.updateUser);
            closeModal();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const userId = userIdInput.toString();
            const { data } = await deleteUser({
                variables: {
                    userId: userId
                }
            });
            console.log('User deleted:', data.deleteUser);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex justify-center items-center mt-8">
            <div className="w-full space-y-8">
                <h2 className="text-2xl font-semibold mb-4">All Users</h2>
                <ul className="divide-y divide-gray-300">
                    {data.getAllUsers && data.getAllUsers.map(user => (
                        <li key={user.id} className="py-2">
                            {user.id} - {user.username} - {user.email} - {user.phonenumber}
                            <button onClick={() => handleUpdate(user.id)} className="ml-4 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-colors">
                                Update
                            </button>
                            <button onClick={() => { setUserIdInput(user.id); handleDelete(); }} className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`fixed z-10 inset-0 overflow-y-auto ${isModalOpen ? 'block' : 'hidden'}`}>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="absolute bg-black opacity-50 inset-0" onClick={closeModal}></div>
                    <div className="relative bg-white w-96 rounded-lg">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-lg font-semibold">Update User</h3>
                            <button onClick={closeModal}>
                                <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4">
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
                            <button onClick={handleUpdateSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOperation;
