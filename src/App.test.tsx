import { getByTestId, getByText, render, screen } from '@testing-library/react';
import { ALERT_TYPES } from 'models/enums';
import IPCGraph from 'pages/ipc-app/components/IPC.Graph';
import { makeRamdomPassword } from 'utils/utils';
import Alert from './components/alerts/Alert'

describe('Executing Test for IPC Challange', () => {

  describe('Utils makeRamdomPassword', ()=>{
    
    test( 'Given a number, return string lenght is number given ', ()=>{
      //let even = isEven(3);
      let result = makeRamdomPassword(5)
      expect(result.length).toBe(5)
    });

    test( 'Given a number, return string with only numbers and letters ', ()=>{
      //let even = isEven(3);
      let result = makeRamdomPassword(100)
      var letter = /[a-zA-Z]/; 
      var number = /[0-9]/;
      var valid = number.test(result) && letter.test(result); //match a letter _and_ a number   
      expect(valid).toBe(true)
    });

  });


  describe('Test componentes fields, alert and graphs ', ()=>{
    
    /* Alert */
    test( 'ALERT COMPONTNET: Given a Info message, displays correct component', ()=>{
      const { container } = render(<Alert message='Test Message' type={ALERT_TYPES.INFO} />);
      expect(getByTestId(container, 'info')).toBeTruthy();
    });

    test( 'ALERT COMPONTNET: Given an Error message, displays correct component', ()=>{
      const { container } = render(<Alert message='Test Message' type={ALERT_TYPES.ERROR} />);
      expect(getByTestId(container, 'error')).toBeTruthy();
    });

    /* IPC GRAPH */

    test( 'IPC GRAPH: Given an empty data, displays correct message', ()=>{
      const { container } = render(<IPCGraph data={[]} />);
      expect(getByText(container, /No IPC data to graph./i)).toBeTruthy();
    });


  });


  describe('API Calls', () => {

    test('IPC DATA ', async () => {
      const executeAPICall = async () => {
        let url: string | undefined = process.env.REACT_APP_URL_GET_IPC;
        if (url !== undefined) {
          return fetch(url).then(res => res.json()).then(data => data).catch((error) => {
            console.error(error)
            return [];
          });
        } else {
          console.error('No URL for getting IPC data.')
          return [];
        }
      }
      let dataResult = await executeAPICall();
      expect(dataResult.length).not.toBe(0);
    });
    
  })





    
});