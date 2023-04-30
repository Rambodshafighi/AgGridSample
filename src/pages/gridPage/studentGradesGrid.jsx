import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Grid from "../../components/Grid";
import { AgGridColumn } from "ag-grid-react";

import { InnerGridFields, InnerGridRowData } from "./grids.data";

const StudentGradesGrid = (props) => {
  const { id, studentName, studentFamily, closePopup } = props;
  const [gridLayoutFields, setGridLayoutFields] = useState([]);
  const [gradesData, setGradesData] = useState(null);

  const isModalOpen = gradesData !== null && gridLayoutFields.length > 0;
  const closeModal = () => {
    setGradesData(null);
    closePopup();
  };

  const mockFetchingLayoutFields = () => {
    setGridLayoutFields(InnerGridFields);
  };


  const mockFetchStudentGradesByID = (id) => {
    console.log(InnerGridRowData.find((i) => i.studentId === id)?.gradesData);
    setGradesData(InnerGridRowData.find((i) => i.studentId === id)?.gradesData);
  };

  useEffect(() => {
    mockFetchingLayoutFields();
  }, []);


  useEffect(() => {
    mockFetchStudentGradesByID(id);
  }, [id]);

  return (
    <>
      <Modal show={isModalOpen} onHide={closeModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            ریز نمرات دانش آموز {studentName} {studentFamily}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid
            rowData={gradesData}
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
            {gridLayoutFields.map((i) => (
              <AgGridColumn
                key={i.title}
                field={i.title}
                headerName={i.label}
                hide={i.isHidden}
                filter={i.filterable}
              />
            ))}
          </Grid>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StudentGradesGrid;
