import * as React from 'react';

interface IProps {
    color?: string
}
interface IState {
    active: boolean
}

class App extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    public setActive = () => {
        this.setState({
            active: true
        });
    }

    public get style(): React.CSSProperties {
        if (!this.state.active) {
            return {
                backgroundColor: this.props.color
            };
        } else {
            return {
                backgroundColor: 'green'
            };
        }
    }

    public render(): JSX.Element {
        return (
            <div onClick={this.setActive} style={this.style}>
                Welcome to TelemetryWeb
            </div>
        );
    }
}

export default App;