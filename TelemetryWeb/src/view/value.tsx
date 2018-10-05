import * as React from 'react';
import * as _ from 'lodash';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

interface IProps {
    data: any[]
}

class Value extends React.Component<IProps, {}> {

    public get currentPoint(): any {
        return _.last(this.props.data);
    }

    public render(): JSX.Element {
        return (
            <Card>
                <CardContent>
                    <Typography variant={'subheading'}>
                        {this.currentPoint.name}
                    </Typography>
                    <Typography variant={'headline'}>
                        {this.currentPoint.value ? "True" : "False"}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default Value;