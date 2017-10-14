import { getCategoryContents, getCurrentPathTargets } from "app/store/selectors/browse";
import { IPathContent, ITarget } from "app/ui/models/path_content";
import { navigateTo, navigateBack } from "client/app/store/actions/browse";
import { IRootStoreState } from "client/app/store/reducers/root";
import * as React from "react";
import { connect } from "react-redux";

class App extends React.Component<IAppProps, IAppState>  {
  public render() {
    const pathDivs = this.props.path.map(this.convertTargetToDiv(this.onCategoryClick));
    const categoryDivs = this.props.categoryContents.categories.map(this.convertTargetToDiv(this.onCategoryClick));
    const orderableDivs = this.props.categoryContents.orderables.map(this.convertTargetToDiv(this.onOrderableClick));

    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>Currently at category {this.props.categoryContents.name}</h2>
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
          <h3>Orderables</h3>
          {orderableDivs}
        </div>
      </div>
    );
  }

  private onCurrentPathClick = (clickedIdx: number) => {
    console.log(`Clicked on path element ${this.props.path[clickedIdx].name}`);
    const stepsBack = this.props.path.length - clickedIdx - 1;
    if (stepsBack > 0) {
      this.props.navigateBack(stepsBack);
    }
  }

  private onCategoryClick = (target: ITarget) => {
    console.log(`Clicked on target ${target.name} with id ${target.id}`);
    this.props.path.forEach((pathTarget, idx) => {
      if (target.id == pathTarget.id) {
        let stepsBack = this.props.path.length - idx;
        console.log(`Clicked target detected as part of path, going ${stepsBack} steps back.`);
        this.props.navigateBack(stepsBack);
        return;
      }
    });
    this.props.navigate(target.id);
  }

  private onOrderableClick = (target: ITarget) => {
    console.log(`Clicked on orderable ${target.name} with id ${target.id}`);
  }

  private convertTargetToDiv = (onTargetClick) => (target: ITarget): JSX.Element => {
    return <div key={target.id} onClick={() => onTargetClick(target)}>{target.name}</div>;
  }
}

interface IAppStateProps {
  name: string;
  path: ITarget[];
  categoryContents: IPathContent;
}

interface IAppDispatchProps {
  navigate: (string) => void;
  navigateBack: (number) => void;
}
type IAppProps = IAppStateProps & IAppDispatchProps;
interface IAppState {}

const mapStateToProps = (state: IRootStoreState): IAppStateProps => {
  return {
    name: state.user.name,
    path: getCurrentPathTargets(state),
    categoryContents: getCategoryContents(state),
  };
};

const mapDispatchToProps = (dispatch): IAppDispatchProps => {
  return {
    navigate: navigateTo(dispatch),
    navigateBack: navigateBack(dispatch),
  };
};

export const AppContainer = connect<IAppStateProps, IAppDispatchProps, any>(mapStateToProps, mapDispatchToProps)(App);
