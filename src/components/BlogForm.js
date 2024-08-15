// src/components/BlogForm.js
import React, { useState, useEffect } from 'react';

function BlogForm() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simular carga de datos
        const fetchData = async () => {
            try {
                // Simular una solicitud de datos
                await new Promise(resolve => setTimeout(resolve, 1000));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Blog Form</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <p>Data has been loaded</p>
            )}
        </div>
    );
}

export default BlogForm;
