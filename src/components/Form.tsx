import React from 'react'

export interface FormType {
  name: string,
  offset: number
  //date: Date
}

type PropsType = {
  onSubmit: (e: React.FormEvent, state: Object) => void
}

interface StateType {
  name: string;
  offset: number | string;
}

type State = Readonly<StateType>;

// export class Form extends React.Component<PropsType, StateType> {
export class Form extends React.Component<PropsType, State> {
  constructor (props: PropsType) {
    super (props);

    this.state = {
      name: '',
      offset: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleInputChange = this.handleInputChange(this);
  }

  //handleSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLFormElement>) => {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //this.setState({[e.target.name]: e.target.value});
    //console.log([e.target.name], e.target.value);
    //console.log(e.currentTarget.elements);
    //console.log(this.state);
    this.props.onSubmit(e, this.state);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //handleInputChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
  //const target = e.target as HTMLInputElement;
    const {name, value} = e.target;
    //console.log(e.target.name, e.target.value);
    //const name = e.target.name;
    //const value = e.target.value;

    
      // if (!/[0-9]/.test(value)) {
      //   e.preventDefault();
      // }
    
    // if ( /^\-?[0-9]?[0-9]?$/.test(value) ) {
    //   this.setState({
    //     [name]: value //.replace(/[^-,0-9]/g, '')//.replace(/\D/, '')
    //   });
    // }

    if ( (name == 'offset') && ( /^\-?[0-9]?[0-9]?$/.test(value) ) )
        this.setState((_state, _props) => ({ offset: value }));
    else if (name === 'name')
      this.setState((_state, _props) => ({ name: value }));
  }

  render() {
    //const {name, offset} = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit} >
        {/* <form onSubmit={this.props.onSubmit} > */}
          <div className="input-container">
            <label htmlFor="name">Название</label>
            {/* <input type="text" id="oname" name="oname" onChange={(e) => this.handleInputChange(e)} /> */}
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