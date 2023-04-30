import { Container, Row, Col } from "react-bootstrap";
import Grid from "../../components/Grid";
import { useEffect, useState } from "react";
import { AgGridColumn } from "ag-grid-react";
import { OuterGridFields, OutterGridRows } from "./grids.data";
import { EyeBtn } from "../../components/FnBtns";
import StudentGradesGrid from "./studentGradesGrid";

const GridsPage = () => {
  const [selectedGridItem, setSelectedGridItem] = useState(null);
  const [gridLayoutFields, setGridLayoutFields] = useState([]);
  const [gridRowData, setGridRowData] = useState([]);

  const mockFetchingLayoutFields = () => {
    setGridLayoutFields(OuterGridFields);
  };

  const mockFetchingRowData = () => {
    setGridRowData(OutterGridRows);
  };

  useEffect(() => {
    mockFetchingLayoutFields();
  }, []);

  useEffect(() => {
    mockFetchingRowData();
  }, [gridLayoutFields]);

  return (
    <Container fluid>
      <Row>
        <Col>
          {selectedGridItem !== null && (
            <StudentGradesGrid
              {...selectedGridItem}
              closePopup={() => setSelectedGridItem(null)}
            />
          )}
          <Grid
            rowData={gridRowData}
            defaultColDef={{
              sortable: true,
              minWidth: 120,
              filter: true,
              floatingFilter: true,
              autoHeaderHeight: true,
              resizable: true,
              initialWidth: 400,
              wrapHeaderText: true,
            }}
            style={{ marginTop: 10 }}
          >
            {gridLayoutFields.map((i) => {
              if (i.title !== "actions")
                return (
                  <AgGridColumn
                    key={i.title}
                    field={i.title}
                    headerName={i.label}
                    hide={i.isHidden}
                    filter={i.filterable}
                  />
                );

              return (
                <AgGridColumn
                  key={i.title}
                  field={i.title}
                  headerName={i.label}
                  hide={i.isHidden}
                  filter={i.filterable}
                  cellRenderer={(i) => (
                    <>
                      {i.data.actions.includes("view") && (
                        <EyeBtn onClick={() => setSelectedGridItem(i.data)} />
                      )}
                    </>
                  )}
                  maxWidth={200}
                />
              );
            })}
          </Grid>
        </Col>
      </Row>
    </Container>
  );
};

export default GridsPage;
