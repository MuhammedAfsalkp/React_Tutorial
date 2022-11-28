import { useForm } from "../../../hooks/form-hook";
import Input from '../../FormElements/Input'
import Button from "../../FormElements/Button";
import { TollContext } from "../../../context/toll-context";
import './AddToll.css'
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  } from '../../../util/validators'
import { useContext } from "react";

const handleval = (index,ar) => {
  let val=ar.filter((e,i,a)=>{
    if(index<=i)return e;
})
return val;

}
const AddToll = (props) => {
    const toll=useContext(TollContext)
    const [formState, inputHandler] = useForm(
        {
          tollName: {
            value: '',
            isValid: false
          },
          fareAmount : {
            value:[ {vehicleId:'v1',vehicleType:'Car/Jeep/Van',singleJourney:'',returnJourney:'',isValid: false},
            {vehicleId:'v2',vehicleType:'LCV',singleJourney:'',returnJourney:'',isValid: false},
            {vehicleId:'v3',vehicleType:'Truck/Bus',singleJourney:'',returnJourney:'',isValid: false},
            {vehicleId:'v4',vehicleType:' Heavy vehicle',singleJourney:'',returnJourney:'',isValid: false}
          ],
            isValid: false
          }

        },
        false
      );


      const tollSubmitHandler = async event => {
        event.preventDefault();
        console.log("working")
        
        try {
          // const formData = new FormData();
          console.log(formState.inputs)
          // formData.append('title', formState.inputs.title.value);
          // formData.append('description', formState.inputs.description.value);
          // formData.append('address', formState.inputs.address.value);
          // formData.append('image', formState.inputs.image.value);  
        } catch (err) {
          console.log(err)
        }
      };
    return (
        <form className="place-form" onSubmit={tollSubmitHandler}>
        
        <Input
          id="tollName"
          element="input"
          type="text"
          label="Toll Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        {toll.vehicleType.map((Vtype,index,ar)=>(
          <div className="details">
            <Input
            id="fareAmountselector"
            element="select"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid type."
            value={handleval(index,ar)}
            onInput={inputHandler}
          />
          <Input
          id="fareAmount"
          dId={`${Vtype.id} singleJourney`}
          element="input"
          type="number"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid number."
          onInput={inputHandler}
          placeholder="Single Journey"
        />
        <Input
          id="fareAmount"
          dId={`${Vtype.id} returnJourney`}
          element="input"
          type="number"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid number."
          onInput={inputHandler}
          placeholder="Return Journey"
        />
        </div>
        ))

        }

        <Button type="submit" disabled={!formState.isValid}>
          Add details
        </Button>
        </form>
        
    )

}


export default AddToll;