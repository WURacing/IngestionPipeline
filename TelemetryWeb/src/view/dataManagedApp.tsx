import * as React from 'react';
import * as _ from 'lodash';

interface IProps {
    data: any[]
}
interface IState {
}

class DataManagedApp extends React.Component<IProps, {}> {

    public get managedData() {
        return _.groupBy(this.props.data, 'sensorId')
    }

    public render(): JSX.Element {
        console.log(this.managedData);
        return (
            <div>
                
            </div>
        );
    }
}

export default DataManagedApp;