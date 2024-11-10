import mongoose from 'mongoose';

// Destructure environment variables for the connection URI
const { DB_USERNAME, DB_PASSWORD } = process.env;

// Define the asynchronous function to connect to the database
export const connectToDatabase = async () => {
  const databaseName = 'nextAuth';

  // Construct the connection URI using template literals
  const databaseConnection = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@mycluster.lydbr.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=MyCluster`;

  try {
    // Check if there's already an active connection
    if (mongoose.connection.readyState) {
      console.log('Already connected to the database');
      return;
    }

    // Connect to the database
    const dbConnection = await mongoose.connect(databaseConnection);

    // Log the host upon successful connection
    console.log(`Connected to database: ${dbConnection.connection.host}`);
  } catch (error) {
    // Log the error for debugging if connection fails
    console.error('Error in connecting to database:', error);
    throw new Error('Error in connecting to database');
  }
};
