module.exports = {
  port: process.env.NODE_PORT || 3000,
  corsOptions: process.env.CORS_OPTIONS,
  // corsOptions: JSON.parse(process.env.CORS_OPTIONS) || { origin: "*" },
  mongoUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/mongopugexpressthing',
}