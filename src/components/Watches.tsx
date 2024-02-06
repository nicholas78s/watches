import { FormType } from './Form'
import { Watch } from './Watch';

interface WatchesListType {
  data: FormType[];
  handleClose: (evt: React.FormEvent, idx: number) => void;
}

export const Watches = ({data, handleClose}: WatchesListType) => {
  return (
    <div className="watches-list"> {data.map((elem, idx) => { 
        return (
          <div key={'div-list-' + elem.name + elem.offset} className="button-container">
            <div key={'close-' + elem.name + elem.offset} 
              className="close-btn" 
              onClick={(e) => {handleClose(e, idx)}}>X</div>
            <Watch key={elem.name + elem.offset} name={elem.name} offset={elem.offset} />
          </div>
        )
      })}
    </div> 
  )
}
