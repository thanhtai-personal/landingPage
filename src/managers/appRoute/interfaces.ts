
export interface IAppRoute {
    setUpStore: Function,
    component: React.FC,
    hocs: Array<string>,
    path: string,
    childrenRoute: Array<IAppRoute>,
    isExact: boolean,
    key: string
}