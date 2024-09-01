// src/App.js
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import PhotoUpload from './components/PhotoUpload';
import PhotoGallery from './components/PhotoGallery';
import Rating from './components/Rating';

const App = () => {
    const [photos, setPhotos] = useState([]);

    const handleLogin = (email, password) => {
        // Handle user login
        console.log('Logging in with', email, password);
    };

    const handleRegister = (email, password) => {
        // Handle user registration
        console.log('Registering with', email, password);
    };

    const handlePhotoUpload = (file) => {
        // Handle photo upload, this example just adds a dummy URL
        const newPhoto = { url: URL.createObjectURL(file) };
        setPhotos([...photos, newPhoto]);
    };

    const handleRatingSelect = (rating) => {
        // Handle rating selection
        console.log('Rating selected:', rating);
    };

    return (
        <div>
            <h1>Photo Rating App</h1>
            <UserForm onLogin={handleLogin} onRegister={handleRegister} />
            <PhotoUpload onPhotoUpload={handlePhotoUpload} />
            <PhotoGallery photos={photos} />
            <h2>Rate this photo</h2>
            <Rating onRatingSelect={handleRatingSelect} />
        </div>
    );
};

export default App;