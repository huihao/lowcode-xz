/// <reference types="react" />
export interface CommoditySelectorProps {
    type: 'normal' | 'advanced';
    limit?: number;
    dataSource: any[];
    columns: any[];
    style?: 'object';
}
declare const CommoditySelector: {
    (props: CommoditySelectorProps): JSX.Element;
    displayName: string;
};
export default CommoditySelector;
