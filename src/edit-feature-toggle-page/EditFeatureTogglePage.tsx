import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {FeatureToggle} from "../models";
import * as featureToggle from "../api/featureToggle";

type ComponentState = {
    featureToggle: FeatureToggle | null;
}

type TParams = {
    id: string;
}

class EditFeatureTogglePage extends React.Component<RouteComponentProps<TParams>, ComponentState>{

    constructor(props: any) {
        super(props);
        this.state = {
            featureToggle: null
        };
    }

    componentDidMount(): void {
        console.log(this.props.match.params.id);
       featureToggle.fetchById(this.props.match.params.id)
           .then((featureToggle: FeatureToggle) => {
               this.setState({
                   featureToggle
               })
           });
    }

    render() {
        return this.state.featureToggle && (
            <ul>
                {Object.entries(this.state.featureToggle).map(([key, value]: [string, string]) => {
                    return <div>{`${key}: ${value}`}</div>
                })}
            </ul>
        )
    }
}

export default withRouter(EditFeatureTogglePage);
