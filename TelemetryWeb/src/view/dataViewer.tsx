import * as React from 'react';
import * as _ from 'lodash';

interface IProps {
    data: any[]
}
interface IState {
}

class DataViewer extends React.Component<IProps, {}> {

    public get style(): React.CSSProperties {
        return {
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column'
        };
    }

    public render(): JSX.Element {
        const rows: JSX.Element[] = _.map(this.props.data, (entry): JSX.Element => {
            return <div>{entry}</div>
        });
        return (
            <div style={this.style}>
                {...rows}
            </div>
        );
    }
}

export default DataViewer;