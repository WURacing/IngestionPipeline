import * as React from 'react';
import * as Websocket from 'react-websocket';
import * as _ from 'lodash';
import DataViewer from './dataViewer';
import DataManagedApp from './dataManagedApp';

interface IProps {
    color?: string
}
interface IState {
    active: boolean
    data: any[]
}

class App extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            data: []
        };
    }

    public setActive = () => {
        this.setState({
            active: true
        });
    }

    public recieve = (data): void => {
        const parsedData = JSON.parse(data);

        //console.log('recieved ' + data);
        this.setState({
            data: _.concat(this.state.data, parsedData)
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
            <div>
                <Websocket
                    url="ws://localhost:2020"
                    onMessage={this.recieve}
                />
                <DataManagedApp data={this.state.data} />
            </div>
        );
    }
}

export default App;