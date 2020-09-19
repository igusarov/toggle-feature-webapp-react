import * as React from "react";
import {FeatureToggle} from "../models";

type ComponentProps = {
    items: FeatureToggle[];
    onClickItem: (item: FeatureToggle) => void
}

const defaultProps: ComponentProps = {
    items: [],
    onClickItem: () => {},
};

export const FeatureToggleList = ({ items, onClickItem }: ComponentProps) => {
    return (
        <ul>
            {items.map((item: FeatureToggle) => (
                <li onClick={() => onClickItem(item)} key={item.id}>
                    {item.displayName || item.technicalName}
                </li>
            ))}
        </ul>
    )
};

FeatureToggleList.defaultProps = defaultProps;
