import * as React from 'react';
import * as _ from 'lodash';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { TableCell, TableRow, Table, TableHead, TableBody } from '@material-ui/core';

interface IProps {
    data: any[]
}
interface IState {
    activeFilter: string;
}

class Chart extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            activeFilter: ''
        };
    }

    private get filteredData(): any[] {
        return _.filter(this.props.data, (point): boolean => {
            return this.state.activeFilter == '' || (
                _.includes(this.state.activeFilter, point.value) ||
                _.includes(this.state.activeFilter, point.timestamp));
        });
    }

    public get currentPoint(): any {
        return _.last(this.props.data);
    }

    private updateFilter = (event): void => {
        console.log(event.target.value);
        this.setState({
            activeFilter: event.target.value
        });
    }

    public render(): JSX.Element {
        console.log(this.filteredData);
        const rows: JSX.Element[] = _.map(this.filteredData, (row) => {
            return (
                <TableRow key={row.timestamp}>
                        <TableCell>{row.sensorId}</TableCell>
                        <TableCell>{row.value}</TableCell>
                        <TableCell>{row.timestamp}</TableCell>
                </TableRow>
            );
        });
        return (
            <div>
                <Typography variant={'subheading'}>
                    {this.currentPoint.name}
                </Typography>
                <TextField
                    label='Filter'
                    value={this.state.activeFilter}
                    onChange={this.updateFilter}
                />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>SensorId</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell>Timestamp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {...rows}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Chart;