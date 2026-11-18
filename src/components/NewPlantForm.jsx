import React from "react";

function NewPlantForm({formData, handleOnChange, handleSubmit}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleOnChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleOnChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleOnChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
