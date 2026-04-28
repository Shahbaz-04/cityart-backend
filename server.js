const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Route Imports
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Load Config
dotenv.config();

// Models for Seeding
const Product = require('./models/productModel');
const User = require('./models/userModel');
const sampleProducts = require('./data/sampleProducts');

const app = express();

// 1. DATABASE CONNECTION & SEEDING
connectDB().then(async () => {
    console.log('Database Connected...');
    
    // Seeding logic ko async/await ke saath handle karna behtar hai
    try {
        // Seed Products
        const existingProducts = await Product.find({});
        if (existingProducts.length === 0) {
            await Product.insertMany(sampleProducts);
            console.log('Sample products seeded.');
        }

        // Seed Admin
        const adminExists = await User.findOne({ username: 'admin' });
        if (!adminExists) {
            const admin = new User({
                username: 'admin',
                password: process.env.ADMIN_PASSWORD || 'admin123', // Use Env variable for security
                role: 'admin'
            });
            await admin.save();
            console.log('Admin user created successfully.');
        }
    } catch (err) {
        console.error('Seeding Error:', err.message);
    }
});

// 2. MIDDLEWARES
// CORS Configuration: Dynamic allow list
const allowedOrigins = [
    "https://your-app-name.netlify.app", // <--- Apna actual Netlify link yahan dalein
    "http://localhost:3000",
    "http://localhost:5173" // Vite users ke liye
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. ROUTES
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Static assets (Images ke liye agar local use kar rahe hain)
app.use('/assets', express.static(path.join(__dirname, '..', 'frontend', 'public', 'assets')));

// 4. PRODUCTION SETUP (Serving Frontend)
if (process.env.NODE_ENV === 'production') {
    const frontendBuildPath = path.resolve(__dirname, '..', 'frontend', 'dist'); // Vite 'dist' use karta hai, React 'build'
    app.use(express.static(frontendBuildPath));

    app.get('*', (req, res) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(path.resolve(frontendBuildPath, 'index.html'));
        }
    });
}

// Health Check Route
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'API is running',
        environment: process.env.NODE_ENV || 'development'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));