import React from 'react';

// Define a simple functional component
const App = () => {
    return (
        <div className="relative w-full h-[calc(100vh-100px)]"> {/* Adjusted for full viewport height */}
            <iframe
                src=" http://localhost:5173/"
                width="100%"
                height="100%"
                frameBorder="0"
                className="absolute top-0 left-0"
                title="Google"
            />
        </div>

    );
};

export default App;
