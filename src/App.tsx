import { useState } from 'react'
import './App.css'
import Form, { FormType } from './components/Form'
import { Watches } from './components/Watches';

function App() {
  const [watches, setWatches] = useState<FormType[]>([]);

  const handleSubmitMain = (formData: any) => {
    if ( !watches.find((elem) => elem.name == formData.name && elem.offset == formData.offset) )
      setWatches([...watches, formData]);
  }

  const handleClose = (_evt: React.FormEvent, idxToRemove: number) => {
    const newWatches: FormType[] = watches
      .filter((_data, idx) => idx !== idxToRemove)
      .map(({name, offset}) => ( {name: name, offset: offset} ));

    setWatches([...newWatches]);
  }

  return (
    <>
      <Form onSubmit={(_evt, formData) => {handleSubmitMain(formData)}} />
      <Watches data={watches} handleClose={handleClose} />
    </>
  )
}

export default App
