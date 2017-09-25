import * as React from 'react';
import { connect } from 'react-redux';
import { IRootStoreState } from 'client/app/store/reducers/root';
import { navigate, navigateBack } from 'client/app/store/actions/browse';
import { IPathContent, ITarget } from "app/ui/models/path_content";
import { getPathContents, getCurrentPathTargets } from "app/store/selectors/browse";

class App extends React.Component<IAppProps, IAppState>  {
  render() {
    const pathDivs = this.props.path.map(
      (pathTarget, idx) => <div key={pathTarget.id} onClick={() => this.onPathClick(idx)}>{pathTarget.name}</div>
    )

    const categoryDivs = this.props.pathContent.categories.map(this.convertTargetToDiv);
    const itemDivs = this.props.pathContent.items.map(this.convertTargetToDiv);
    const bundleDivs = this.props.pathContent.bundles.map(this.convertTargetToDiv);

    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>Currently at category {this.props.pathContent.name}</h2>
        <div>
          <h2>Path</h2>
          {pathDivs}
        </div>
        <div>
          <h2>Sub-categories</h2>
          {categoryDivs}
        </div>
        <div>
          <h2>Contents</h2>
          <h3>Items</h3>
          {itemDivs}
          <h3>Bundles</h3>
          {bundleDivs}
        </div>
      </div>
    );
  }

  private onPathClick = (clickedIdx: number) => {
    console.log(`Clicked on path element ${this.props.path[clickedIdx].name}`);
    const stepsBack = this.props.path.length - clickedIdx - 1;
    if (stepsBack > 0) {
      this.props.navigateBack(stepsBack);
    }
  }

  private onTargetClick = (target: ITarget) => {
    console.log(`Clicked on target ${target.name} with id ${target.id}`);
    this.props.navigate(target.id);
  }

  private convertTargetToDiv = (target: ITarget): JSX.Element => {
    return <div key={target.id} onClick={() => this.onTargetClick(target)}>{target.name}</div>;
  }
}


type IAppStateProps = {
  name: string;
  path: ITarget[];
  pathContent: IPathContent;
};

type IAppDispatchProps = {
  navigate: (string) => void;
  navigateBack: (number) => void;
}
type IAppProps = IAppStateProps & IAppDispatchProps;
type IAppState = {};

const mapStateToProps = (state: IRootStoreState): IAppStateProps => {
  return {
    name: state.name.name,
    path: getCurrentPathTargets(state),
    pathContent: getPathContents(state),
  }
};

const mapDispatchToProps = (dispatch): IAppDispatchProps => {
  return {
    navigate: navigate(dispatch),
    navigateBack: navigateBack(dispatch),
  }
};

export const AppContainer = connect<IAppStateProps, IAppDispatchProps, any>(mapStateToProps, mapDispatchToProps)(App);