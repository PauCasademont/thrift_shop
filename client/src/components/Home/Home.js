import React from 'react';

function Home({user}) {
    return (
        <h1>{user ? user.username : 'name'}</h1>
    )
}

export default Home
