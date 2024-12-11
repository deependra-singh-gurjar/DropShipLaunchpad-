const { generateAIContent } = require("../services/openaiService");

const generateContent = async (req, res) => {
  try {
    const { productDetails } = req.body;
    const aiResponse = await generateAIContent(productDetails);
    res.json({ content: aiResponse });
  } catch (error) {
    console.error("Error generating AI content:", error);
    res.status(500).json({ error: "Failed to generate content" });
  }
};

module.exports = { generateContent };
