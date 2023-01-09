import React from 'react';

//its an arrow function which will return class component
//we can pass comp and paramert like incrementNumber

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    //{...this.props} will pass other props which is defined in param component
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
