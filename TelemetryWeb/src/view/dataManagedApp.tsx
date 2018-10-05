import * as React from 'react';
import * as _ from 'lodash';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Chart from './chart';
import Value from './value';

interface IProps {
    data: any[]
}
interface IState {
    tabPosition: number;
}

class DataManagedApp extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 0
        };
    }

    private updateTab = (event, val): void => {
        this.setState({tabPosition: val});
    }

    public get managedData(): any {
        return _.mapValues(_.groupBy(this.props.data, 'sensorId'));
    }

    public render(): JSX.Element {
        const cards: JSX.Element[] = _.map(this.managedData, (sensorData) => {
            console.log(sensorData[0].visualizationType);
            switch(sensorData[0].visualizationType) {
                case 'line':
                    return (
                        <Grid item xs={9}>
                            <Chart data={sensorData} />
                        </Grid>
                    );
                case 'value':
                    return (
                        <Grid item xs={3}>
                            <Value data={sensorData} />
                        </Grid>
                    );
            }
        });
        return (
            <div>
                <Tabs value={0} onChange={this.updateTab}>
                    <Tab label="Live Data" />
                    <Tab label="Historical Data" />
                </Tabs>
                <Grid container spacing={16}>
                    {...cards}
                </Grid>
            </div>
        );
    }
}

export default DataManagedApp;