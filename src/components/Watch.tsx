import React from 'react'

interface WatchPropsType {
  name: string;
  offset: number;
}

interface WatchStateType {
  name: string;
  date: Date;
  offset: number;
}

export class Watch extends React.Component<WatchPropsType, WatchStateType> {
  timerID: number = 0;

  constructor (props: WatchPropsType) {
    super (props);
    
    const {name, offset} = this.props;

    this.state = {
      name: name,
      date: this.getOffsetDate(offset),
      offset: offset
    };
  }

  componentDidMount(): void {
    this.timerID = setInterval(
      () => this.tick(), 
      1000
    );
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  getOffsetDate(offset: number) {
    return new Date(Date.now() + offset * (60 * 60 * 1000) );
  }

  tick() {
    this.setState({
      date: this.getOffsetDate(this.state.offset)
    });
  }

  getArrowStyle(value: number, arrowType: string) {
    const deg = value * 360.0 / ((arrowType === 'hours') ? 12.0 : 60.0);
    const size = (arrowType === 'seconds') ? 60 : (arrowType === 'minutes') ? 50 : 40;
    const translateSize = size / 2;
    return {
      transform: `translate(0, ${translateSize}px) rotate(${deg}deg) translate(0, -${translateSize}px)`
    };
  }

  render() {
    return (
      <div className='watch-container'>
        <div>{this.state.name}</div>
        <div className='watch'>
          <div className='arrow seconds' style={this.getArrowStyle(this.state.date.getSeconds(), 'seconds')}></div>
          <div className='arrow minutes' style={this.getArrowStyle(this.state.date.getMinutes(), 'minutes')}></div>
          <div className='arrow hours' style={this.getArrowStyle(this.state.date.getHours(), 'hours')}></div>
        </div>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }
}
