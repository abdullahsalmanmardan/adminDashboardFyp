import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
const DataGridView = () => {
  //todo is ma hum data to dosri file se export kar ke yaha lay gay
  // todo idher hum ne sab data(row) rowData ma pass kar diya ha
  // const [rowData, setRowData] = useState(rows);

  // todo these are the heading tags of the table
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    // todo renderCell se hum apni marzi ki output show kar sakty ha
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      // todo idher hum image b add kar sakty ha our jo b data ho color wegrar b de sakty ha
      renderCell: (params) => {
        return (
          <div className="bg-green-400 rounded-xl">{params.row.lastName}</div>
        );
      },
    },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    // ! important
    //* this is how we create the additional html items in table
    // todo here we can edit and delete buttons
    {
      feild: "actions",
      headerName: "actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex">
            <div>
              {/* todo is tarha hum url ma wo id send karin gay */}
              <Link to={"/user/" + params.row.id}>
                <button className="bg-blue-600 text-white px-2 py-2 rounded-xl">
                  update
                </button>
              </Link>
            </div>
            <div className="text-red-500">
              {" "}
              <DeleteIcon></DeleteIcon>
            </div>
          </div>
        );
      },
    },
  ];

  // todo these are the values for these headers
  // todo jo nam yaha key ma dena ha wohi name upr coloum ma b dena ha
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <>
      <div style={{ height: 400, width: "100%", overflow: "scroll" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableRowSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default DataGridView;
