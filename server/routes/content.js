const express = require('express');
const router = express.Router();
const { generateContent } = require('../services/openaiService');

router.post('/', async (req, res) => {
    const { prompt } = req.body;
    try {
        const content = await generateContent(prompt);
        res.status(200).json({ content });
    } catch (error) {
        res.status(500).json({ message: 'Error generating content', error });
    }
});

module.exports = router;
