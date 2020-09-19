import * as React from "react";
import { FeatureToggleList } from "../feature-toggle-list/FeatureToggleList";
import * as featureToggle from "../api/featureToggle";
import {FeatureToggle} from "../models";
import { withRouter, RouteComponentProps } from "react-router-dom";

type ComponentState = {
    featureToggles: FeatureToggle[];
}
class FeatureToggleListPage extends React.Component<RouteComponentProps, ComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            featureToggles: []
        };
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    componentDidMount(): void {
        featureToggle.fetchAll().then(this.handleLoadedFeatureToggles.bind(this));
    }

    handleLoadedFeatureToggles(items: FeatureToggle[]) {
        this.setState({
            featureToggles: items
        });
    }

    handleClickItem(item: FeatureToggle) {
        this.props.history.push(`/feature-toggles/${item.id}`);
    }

    render() {
        return <FeatureToggleList
            onClickItem={this.handleClickItem}
            items={this.state.featureToggles}
        />;
    }
}

export default withRouter(FeatureToggleListPage);
