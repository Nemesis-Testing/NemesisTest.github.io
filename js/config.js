// Configuration for different environments
const config = {
    // Development (when running locally)
    development: {
        apiUrl: 'http://localhost:3000',
        environment: 'development'
    },
    
    // Production (when site is hosted online)
    production: {
        // 🆓 RENDER URL - Your actual deployed backend URL
        // Format: https://your-app-name.onrender.com (no trailing slash)
        apiUrl: 'https://nemesis-backend-yv3w.onrender.com', // ✅ UPDATED!
        environment: 'production'
    }
};

// Auto-detect environment
function getEnvironment() {
    // If we're on localhost or file://, assume development
    if (location.hostname === 'localhost' || 
        location.hostname === '127.0.0.1' || 
        location.protocol === 'file:') {
        return 'development';
    }
    return 'production';
}

// Get current configuration
function getConfig() {
    const env = getEnvironment();
    console.log('Detected environment:', env);
    return config[env];
}

// Export for use in other files
window.siteConfig = getConfig();