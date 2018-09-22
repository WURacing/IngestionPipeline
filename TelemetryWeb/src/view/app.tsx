import * as React from 'react';

interface IProps {}
interface IState {
    active: boolean;
    time: number;
}

class App extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            time: 1300
        };
    }

    public activate = () => {
        this.setState({
            active: true
        });
    }

    public get style(): React.CSSProperties {
        if (this.state.active) {
            return {
                backgroundColor: 'red'
            }
        } else {
            return {
                backgroundColor: 'blue'
            }
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                <div onClick={this.activate} style={this.style}>
                    Welcome to TelemetryWeb
                </div>
                { this.state.active &&
                <div> Active! </div> 
                }  
            </div>
        );
    }
}

export default App;