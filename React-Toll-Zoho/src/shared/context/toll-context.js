import { createContext } from 'react';

export const TollContext = createContext({
  logs:[],
  tolls: [],
  vehicleType: [],
  addLog: (data) => {},
  addToll: (data) => {}
});
