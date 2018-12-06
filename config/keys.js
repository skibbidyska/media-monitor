module.exports = {
    mongoURI: process.env.MONGODB_URI || "mongodb://localhost/media-monitor-db",
    PORT: process.env.PORT || 8080
};