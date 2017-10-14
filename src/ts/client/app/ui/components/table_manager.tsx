import * as React from "react";
import { ITarget, IPathContent } from "app/ui/models/path_content";
import { IRootStoreState } from "app/store/reducers/root";
import { getCurrentPathTargets, getCategoryContents } from "app/store/selectors/browse";
import { navigateTo, navigateBack } from "app/store/actions/browse";
import { connect } from "react-redux";

class TableManager extends React.Component<ITableManagerProps, ITableManagerState>  {
  public render() {
    const pathDivs = this.props.path.map(this.convertTargetToDiv(this.onCategoryClick));
    const categoryDivs = this.props.categoryContents.categories.map(this.convertTargetToDiv(this.onCategoryClick));
    const orderableDivs = this.props.categoryContents.orderables.map(this.convertTargetToDiv(this.props.onClickOrderable));

    return (
      <div>
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

  private onCategoryClick = (id: string) => {
    console.log(`Clicked on category target with id ${id}`);
    this.props.path.forEach((pathTarget, idx) => {
      if (id == pathTarget.id) {
        let stepsBack = this.props.path.length - idx;
        console.log(`Clicked target detected as part of path, going ${stepsBack} steps back.`);
        this.props.navigateBack(stepsBack);
        return;
      }
    });
    this.props.navigateTo(id);
  }

  private convertTargetToDiv = (onTargetClick) => (target: ITarget): JSX.Element => {
    return <div key={target.id} onClick={() => onTargetClick(target.id)}>{target.name}</div>;
  }
}

interface ITableManagerStateProps {
  path: ITarget[];
  categoryContents: IPathContent;
}

interface ITableManagerDispatchProps {
  onClickOrderable: (string) => void;
  navigateTo: (string) => void;
  navigateBack: (number) => void;
}

type ITableManagerProps = ITableManagerStateProps & ITableManagerDispatchProps;
interface ITableManagerState {}

const mapStateToProps = (state: IRootStoreState): ITableManagerStateProps => {
  return {
    path: getCurrentPathTargets(state),
    categoryContents: getCategoryContents(state),
  };
};

const mapDispatchToProps = (dispatch): ITableManagerDispatchProps => {
  return {
    onClickOrderable: (id) => {
      console.log(`Clicked on orderable with id ${id}`);
    },
    navigateTo: navigateTo(dispatch),
    navigateBack: navigateBack(dispatch),
  };
};

export default connect<ITableManagerStateProps, ITableManagerDispatchProps, any>(mapStateToProps, mapDispatchToProps)(TableManager);