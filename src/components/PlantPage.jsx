import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(()=>{
  fetch(`http://localhost:6001/plants`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setPlants(data) 
  })
},[])


const [formData, setFormData] = useState({
  name:"",
  image:"",
  price:""
})

function handleOnChange(event){
  setFormData({
    ...formData, [event.target.name] : event.target.value
  })
} 

function handleSubmit(event){
  event.preventDefault()
  fetch(`http://localhost:6001/plants`, {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(formData)

  })
  .then(res => res.json())
  .then(data => {
     setPlants([
    ...plants, data
  ])
  })
}

//search query : Find a way to rerender the plants when search is cleared

function handleSearch(event){
  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(event.target.value.toLowerCase())
  })
  setPlants(filteredPlants)
}

  return (
    <main>
      <NewPlantForm 
        formData={formData}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />
      <Search 
        handleSearch={handleSearch}
      />
      <PlantList 
      plants={plants} />
    </main>
  );
}

export default PlantPage;
