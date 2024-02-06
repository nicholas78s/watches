import { useState } from 'react'
import './App.css'
import Form, { FormType } from './components/Form'
import { Watches } from './components/Watches';

// type FormDataType = {
//   name: string,
//   offset: number
// }

function App() {
  const [watches, setWatches] = useState<FormType[]>([]);
  //let watchesTemp: FormType[] = [];

  //const handleSubmitMain = (_evt: React.FormEvent, data: FormType) => {
  const handleSubmitMain = (formData: any) => {
    //const handleSubmitMain = (_evt: FormEvent<Element>, {data}: {data: FormType}) => {
    //console.log('Main:', data);
    //watchesTemp.push(data);
    //setWatches(watchesTemp);
    //const {name, offset} = formData;

    if ( !watches.find((elem) => elem.name == formData.name && elem.offset == formData.offset) )
      setWatches([...watches, formData]);
  }

  const handleClose = (_evt: React.FormEvent, idxToRemove: number) => {
    //console.log('Main:', data);
    //watchesTemp.push(data);
    //setWatches(watchesTemp);
    //setWatches([]);
    // let newWatches = [...watches];
    // newWatches.splice(idx, 1);
    // setWatches(newWatches);
    // console.log('delete:', idx, watches, newWatches);
    const newWatches: FormType[] = watches
      .filter((_data, idx) => idx !== idxToRemove)
      .map(({name, offset}) => ( {name: name, offset: offset} ));
      //.map((data) => data);
    setWatches([...newWatches]);
  }

  return (
    <>
      {/* <Form onSubmit={(_evt, formData: FormType) => {handleSubmitMain(formData)}} /> */}
      <Form onSubmit={(_evt, formData) => {handleSubmitMain(formData)}} />
      {/* <div><b>Watches:</b> {watches.map((elem, idx) => { return (<div key={idx}>{elem.oname}: {elem.offset}</div>)})}</div> */}
      <Watches data={watches} handleClose={handleClose} />
    </>
  )
}

export default App
