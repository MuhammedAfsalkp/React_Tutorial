import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
  let formIsValid;
  switch (action.type) {
    case 'tollName':
       formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    case 'fareAmount':
      
       formIsValid = true;
       let fareValid=state.inputs.fareAmount.isValid;
       console.log("fareValid",fareValid,action.dId)
       let [vid,journeyType]=action.dId.split(' ')
       console.log(vid,journeyType)
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          let vehicle=state.inputs['fareAmount'].value;
           fareValid=vehicle.every(el=>{if(el.vehicleId===vid){return action.isValid && ((journeyType=='singleJourney'?(el.returnJourney.toString().trim().length > 0):(el.singleJourney.toString().trim().length > 0)))}
                                       else{return el.isValid===true}
                                      })
          formIsValid = formIsValid && fareValid
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      //change journey rate;
      let v=state.inputs.fareAmount.value;
      v.forEach((el,index)=>{
        if(el.vehicleId==vid){
            el[journeyType]=action.value;
            //2 value check cheyynm
            el.isValid=   (el.singleJourney.toString().trim().length > 0) && (el.returnJourney.toString().trim().length > 0)
    
        }
    
      })
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: v, isValid: fareValid}
        },
        isValid: formIsValid
      };
     
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity
  });
  console.log(formState)
  const inputHandler = useCallback((id, value, isValid,dId="") => {
    if(id==="tollName"){
    dispatch({
      type: 'tollName',
      value: value,      //value
      isValid: isValid,   //true/false
      inputId: id    //fareAmount
    });}
    if(id==='fareAmount'){
      dispatch({
        type: 'fareAmount',
        value: value,      //value
        isValid: isValid,   //true/false
        inputId: id,  //fareAmount
        dId:dId    //v1 singleJourney
      })

    }
  }, []);

  // const setFormData = useCallback((inputData, formValidity) => {
  //   dispatch({
  //     type: 'SET_DATA',
  //     inputs: inputData,
  //     formIsValid: formValidity
  //   });
  // }, []);

  return [formState, inputHandler];
};