import React, { useState } from "react";
import { localeText } from "./translate";
import { AgGridReact } from "ag-grid-react";
import "./grids.css";

const Grid = (props) => {
  const { onGridReady, rowData = [], mRef, children, ...rest } = props;
  const [, setGridApi] = useState(null);
  const [, setGridColumnApi] = useState(null);

  const onFirstDataRendered = (params) => {
    params.api.sizeColumnsToFit();
  };

  const localOnGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 450, width: "100%", marginTop: "1rem" }}>
      <AgGridReact
        ref={mRef}
        enableRtl={true}
        onGridReady={onGridReady ? onGridReady : localOnGridReady}
        pagination={true}
        paginationPageSize={10}
        onFirstDataRendered={onFirstDataRendered}
        defaultColDef={{
          sortable: true,
          floatingFilter: true,
          floatingFilterComponentParams: { suppressFilterButton: true },
          menuTabs: ["generalMenuTab", "columnsMenuTab"],
          suppressMenu: false,
          resizable: true,
        }}
        suppressCellFocus={true}
        localeText={localeText}
        rowData={rowData}
        {...rest}
      >
        {children}
      </AgGridReact>
    </div>
  );
};

export default Grid;
