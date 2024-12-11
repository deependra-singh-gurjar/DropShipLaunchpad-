import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [productDetails, setProductDetails] = useState({ name: "", description: "" });
  const [generatedContent, setGeneratedContent] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/ai/generate", { productDetails });
      setGeneratedContent(response.data.content);
    } catch (error) {
      console.error("Error generating content", error);
    }
  };

  return (
    <div>
      <h2>Product Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <textarea
          name="description"
          value={productDetails.description}
          onChange={handleChange}
          placeholder="Product Description"
        ></textarea>
        <button type="submit">Generate Description</button>
      </form>
      {generatedContent && (
        <div>
          <h3>Generated Content</h3>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
}

export default ProductForm;
