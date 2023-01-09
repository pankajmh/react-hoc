import React from 'react';
import withCounter from '../HOC/WithCounter';

class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h3 onMouseOver={incrementCount}>Hover {count} times</h3>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 10);
