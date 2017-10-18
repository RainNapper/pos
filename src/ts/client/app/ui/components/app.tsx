import { getCategoryContents, getCurrentPathTargets } from "app/store/selectors/browse";
import { getActiveTable } from "app/store/selectors/table";
import TableManager from "app/ui/components/table_manager";
import TableMaster from "app/ui/components/table_master";
import { IPathContent, ITarget } from "app/ui/models/path_content";
import { navigateBack, navigateTo } from "client/app/store/actions/browse";
import { IRootStoreState } from "client/app/store/reducers/root";
import * as React from "react";
import { connect } from "react-redux";
import { ITable } from "shared/models/table";

class App extends React.Component<IAppProps, IAppState>  {
  public render() {
    if (this.props.activeTable !== undefined) {
      return <TableManager />;
    } else {
      return <TableMaster />;
    }
  }
}

interface IAppStateProps {
  activeTable?: ITable;
}
interface IAppDispatchProps {}
interface IAppProps extends IAppStateProps, IAppDispatchProps {}
interface IAppState {}

const mapStateToProps = (state: IRootStoreState): IAppStateProps => {
  return {
    activeTable: getActiveTable(state),
  };
};

const mapDispatchToProps = (dispatch): IAppDispatchProps => {
  return {
  };
};

export default connect<IAppStateProps, IAppDispatchProps, any>(mapStateToProps, mapDispatchToProps)(App);
