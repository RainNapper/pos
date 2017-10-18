import { selectTable } from "app/store/actions/table";
import { IRootStoreState } from "app/store/reducers/root";
import { getTables } from "app/store/selectors/table";
import * as React from "react";
import { connect } from "react-redux";
import { ITable } from "shared/models/table";

class TableMaster extends React.Component<ITableMasterProps, ITableMasterState>  {
  constructor(props) {
    super(props);

    this.onTableClick = this.onTableClick.bind(this);
    this.convertTableToDiv = this.convertTableToDiv.bind(this);
  }

  public render() {
    const tables = this.props.tables.sort((a, b) => a.number - b.number).map(this.convertTableToDiv);
    return (
      <div>
          Tables:
          {tables}
      </div>
    );
  }

  private convertTableToDiv(table: ITable) {
    let partyDiv;
    if (table.party !== undefined) {
      partyDiv = (<div><div>Phase: {table.party.phase}</div><div>Size: {table.party.size}</div></div>);
    } else {
      partyDiv = (<div>Vacant</div>);
    }

    return (
      <div key={table.id} onClick={(e) => this.onTableClick(table.id, e)}>
        <div>Table: {table.number}</div>
        <div>Seats: {table.seats}</div>
        {partyDiv}
      </div>
    );
  }

  private onTableClick = (id, event) => {
    console.log("on table click");
    this.props.selectTable(id);
  }
}

interface ITableMasterStateProps {
  tables: ITable[];
}

interface ITableMasterDispatchProps {
  selectTable: (id: string) => void;
}

interface ITableMasterProps extends ITableMasterStateProps, ITableMasterDispatchProps {}
interface ITableMasterState {}

const mapStateToProps = (state: IRootStoreState): ITableMasterStateProps => {
  return {
    tables: getTables(state),
  };
};

const mapDispatchToProps = (dispatch): ITableMasterDispatchProps => {
  return {
    selectTable: selectTable(dispatch),
  };
};

export default connect<ITableMasterStateProps, ITableMasterDispatchProps, any>(
    mapStateToProps, mapDispatchToProps)(TableMaster);
