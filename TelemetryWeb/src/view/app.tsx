import * as React from 'react';

interface IProps {}
interface IState {}

class App extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <div>
                Welcome to TelemetryWeb
            </div>
        );
    }
}

export default App;