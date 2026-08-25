const express = require('express');
const cors = require('cors');
const { Op } = require('sequelize');
const sequelize = require('./db');
const Category = require('./models/Category');
const Specialty = require('./models/Specialty');
const Artisan = require('./models/Artisan');

// Définition explicite des relations Sequelize
Category.hasMany(Specialty, { foreignKey: 'category_id' });
Specialty.belongsTo(Category, { foreignKey: 'category_id' });

Specialty.hasMany(Artisan, { foreignKey: 'specialty_id' });
Artisan.belongsTo(Specialty, { foreignKey: 'specialty_id' });

const app = express();
app.use(cors());
app.use(express.json());

// ==========================================
// 1. ROUTE : Récupérer toutes les catégories
// ==========================================
app.get('/api/categories', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==========================================
// 2. ROUTE : Récupérer les artisans du mois
// ==========================================
app.get('/api/artisans/top', async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            where: { top_artisan: true },
            include: [{ model: Specialty }]
        });
        res.json(artisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==========================================
// 3. ROUTE : Récupérer les artisans par nom de catégorie (Bâtiment, Services, etc.)
// ==========================================
app.get('/api/artisans/category/:categoryName', async (req, res) => {
    try {
        const { categoryName } = req.params;
        const artisans = await Artisan.findAll({
            include: [{
                model: Specialty,
                required: true,
                include: [{
                    model: Category,
                    required: true,
                    where: { name: categoryName }
                }]
            }]
        });
        res.json(artisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==========================================
// 4. ROUTE : Récupérer tous les artisans (avec filtres optionnels)
// ==========================================
app.get('/api/artisans', async (req, res) => {
    try {
        const { category, search } = req.query;
        let whereArtisan = {};
        let includeOptions = { model: Specialty };

        if (search) {
            whereArtisan.name = { [Op.like]: `%${search}%` };
        }

        if (category) {
            includeOptions.where = { category_id: category };
        }

        const artisans = await Artisan.findAll({
            where: whereArtisan,
            include: [includeOptions]
        });
        res.json(artisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==========================================
// 5. ROUTE : Détail d'un artisan par son ID
// ==========================================
app.get('/api/artisans/:id', async (req, res) => {
    try {
        const artisan = await Artisan.findByPk(req.params.id, {
            include: [{
                model: Specialty,
                include: [{ model: Category }]
            }]
        });

        if (!artisan) {
            return res.status(404).json({ error: 'Artisan non trouvé' });
        }

        res.json(artisan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==========================================
// LANCEMENT DU SERVEUR
// ==========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});