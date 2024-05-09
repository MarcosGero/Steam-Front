import React from 'react';
import NavigationBar from '../components/NavigationBar'; // Adjust the path as necessary

function Home() {
    return (
        <div>
            <div style={{ color: 'white', backgroundColor: '#142540', minHeight: '100vh' }} className="homepage-content">
                <h1>Welcome!</h1>
                <p>This is a simple home page using React. Navigate through the site using the navbar above.</p>
            </div>
        </div>
    );
}

export default Home