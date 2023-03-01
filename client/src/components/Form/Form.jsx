import React, { useState } from "react";

const Form = () => {
    const [form,setForm] = useState({
        name:"",
        height:"",
        weight:"",
        life_span:"",
        temperaments:[],
    })



    const [errors, setErrors]= useState({
    name:"",
    height:"",
    weight:"",
    life_span:"",
    temperaments:[],
    })

    const validate = (form)=>{

    }
    /*
let validateName = /^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/;
let validateNum = /^\d+$/;
let validateUrl = /(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png)/;

function validate(input) {
  let errors = {};
  if (!input.name.trim()) {
    errors.name = "The name must be provided ";
  } else if (!validateName.test(input.name)) {
    errors.name = "Not a valid name";
  } else if (input.name.length < 2) {
    errors.name = "The name must have more than one character";
  } else if (input.name.length > 30) {
    errors.name = "The breed has too many characters";
  } else if (
    allBreeds.find((e) =>
      e.name.toLowerCase().trim().includes(input.name.toLowerCase().trim())
    )
  ) {
    errors.name = "The breed already exists";
  }
  if (!validateUrl.test(input.image)) {
    errors.image = "URL  for the image required";
  }
  if (
    !validateNum.test(input.min_height) ||
    parseInt(input.min_height) < 1 ||
    parseInt(input.min_height) > parseInt(input.max_height)
  ) {
    errors.min_height =
      "The height is required. The max height should be higher than min height.";
  }

  if (
    !validateNum.test(input.max_height) ||
    parseInt(input.max_height) < parseInt(input.min_height)
  ) {
    errors.min_height =
      "The height is required. The max height should be higher than min height.";
  }
  //weight
  if (
    !validateNum.test(input.min_weight) ||
    parseInt(input.min_weight) < 1 ||
    parseInt(input.min_weight) > parseInt(input.max_weight)
  ) {
    errors.min_weight =
      "The weight is required. The max weight should be higher than min weight.";
  }

  if (
    !validateNum.test(input.max_weight) ||
    parseInt(input.max_weight) < parseInt(input.min_weight)
  ) {
    errors.min_weight =
      "The weight is required. The max weight should be higher than min weight.";
  }
  //lifespan
  if (
    !validateNum.test(input.min_lifespan) ||
    parseInt(input.min_lifespan) < 1 ||
    parseInt(input.min_lifespan) > parseInt(input.max_lifespan)
  ) {
    errors.min_lifespan =
      "The lifespan is required. The max lifespan should be higher than min lifespan.";
  }

  if (
    !validateNum.test(input.max_lifespan) ||
    parseInt(input.max_lifespan) < parseInt(input.min_lifespan)
  ) {
    errors.max_lifespan =
      "The lifespan is required. The max lifespan should be higher than min lifespan.";
  } else if (input.temperaments.length < 1) {
    errors.temperaments = "At least one temperament should be select ";
  }

  return errors;
}*/

    const changeHandler = (event)=>{
        const property=event.target.name;
        const value=event.target.value;

        setForm({...form,[property]:value})

    }
    return(
        <form>
            <div>
                <label>Name</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"></input>
            </div>

            <div>
                <label>Height</label>
                <input type="text" value={form.height} onChange={changeHandler} name="height"></input>
            </div>
            
            <div>
                <label>Weight</label>
                <input type="text" value={form.weight} onChange={changeHandler} name="weight"></input>
            </div>
    
            <div>
                <label>Life span</label>
                <input type="text" value={form.life_span} onChange={changeHandler} name="life_span"></input>
            </div>
    
            <div>
                <label>Temperaments</label>
                <input type="text" value={form.temperaments}></input>
            </div>
        </form>
    )
}

export default Form;
