import React from 'react'

export interface FormType {
  name: string,
  offset: number
}

type PropsType = {
  onSubmit: (e: React.FormEvent, state: Object) => void
}

interface StateType {
  name: string;
  offset: number | string;
}

type State = Readonly<StateType>;

export class Form extends React.Component<PropsType, State> {
  constructor (props: PropsType) {
    super (props);

    this.state = {
      name: '',
      offset: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit(e, this.state);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    
    if ( (name == 'offset') && ( /^\-?[0-9]?[0-9]?$/.test(value) ) )
        this.setState((_state, _props) => ({ offset: value }));
    else if (name === 'name')
      this.setState((_state, _props) => ({ name: value }));
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit} >
          <div className="input-container">
            <label htmlFor="name">Название</label>
            <input type="text" id="name" name="name" onChange={this.handleInputChange}/>
          </div>
          <div className="input-container">
            <label htmlFor='offset'>Временная зона</label>
            <input type="text" id="offset" name="offset" onChange={this.handleInputChange}  value={this.state.offset} />
          </div>
          <div className="input-container">
            <input type="submit" value="Добавить" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form