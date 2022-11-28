import { useState, useCallback } from 'react';

let vehicleType=[
    {id:'v1',type:'Car/Jeep/Van'},
    {id:'v2',type:'LCV'},
    {id:'v3',type:'Truck/Bus'},
    {id:'v4',type:' Heavy vehicle'}]
let tollList =[
    {id:'t1',
    tollName:'Chengalpattu',
    fareAmount:[ {vehicleId:'v1',vehicleType:'Car/Jeep/Van',singleJourney:60,returnJourney:30},
                 {vehicleId:'v2',vehicleType:'LCV',singleJourney:95,returnJourney:50},
                 {vehicleId:'v3',vehicleType:'Truck/Bus',singleJourney:205,returnJourney:100},
                 {vehicleId:'v4',vehicleType:' Heavy vehicle',singleJourney:320,returnJourney:160}
               ]
    },
    {id:'t2',
    tollName:'Kappalur',
    fareAmount:[ {vehicleId:'v1',vehicleType:'Car/Jeep/Van',singleJourney:75,returnJourney:50},
                 {vehicleId:'v2',vehicleType:'LCV',singleJourney:125,returnJourney:80},
                 {vehicleId:'v3',vehicleType:'Truck/Bus',singleJourney:260,returnJourney:120},
                 {vehicleId:'v4',vehicleType:' Heavy vehicle',singleJourney:400,returnJourney:200}
               ]
    },
    {id:'t3',
    tollName:'Krishnagiri',
    fareAmount:[{vehicleId:'v1',vehicleType:'Car/Jeep/Van',singleJourney:70,returnJourney:40},
                 {vehicleId:'v2',vehicleType:'LCV',singleJourney:110,returnJourney:65},
                 {vehicleId:'v3',vehicleType:'Truck/Bus',singleJourney:235,returnJourney:130},
                 {vehicleId:'v4',vehicleType:' Heavy vehicle',singleJourney:400,returnJourney:200}]
    }
]

let logList=[
    {id:'l1',
    vehicleType:'Car/Jeep/Van',
    vehicleNumber:'TN24AQ4644',
    date:'09/09/2022,16:43:48',
    tollName:'Chengalpattu',
    tariff:'60'
    },
    {id:'l2',
    vehicleType:'Car/Jeep/Van',
    vehicleNumber:'TN19qq1234',
    date:'09/09/2022,15:30:34',
    tollName:'Kappalur',
    tariff:'75'
    },
    {id:'l3',
    vehicleType:'Heavy Vehicle',
    vehicleNumber:'TN24A1234',
    date:'09/09/2022,12:12:34',
    tollName:'Kappalur',
    tariff:'400'
    }
]


export const useToll = () => {
    const [tolls,setTolls] = useState(tollList);
    const [logs,setLogs]  = useState(logList);




    const addLog = useCallback((data) => {
        setLogs(prev=>{ return{...prev,data}})
        
      }, []);


      const addToll = useCallback((data) => {
        setTolls(prev=> {return{...prev,data}})
        
    }, []);  


    return {tolls,logs,vehicleType,addLog,addToll}
}