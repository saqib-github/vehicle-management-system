import React from "react";
import { AgGridReact } from "ag-grid-react";
import { Button } from "react-bootstrap";

const index = () => {
  const rowData = [
    {
      name: "Toyota",
      model: "Celica",
      price: 35000,
      color: "red",
      registration: "16/06/2022",
      make: "Ford",
    },
    {
      name: "Toyota",
      model: "Celica",
      price: 35000,
      color: "red",
      registration: "16/06/2022",
      make: "Ford",
    },
    {
      name: "Toyota",
      model: "Celica",
      price: 35000,
      color: "red",
      registration: "16/06/2022",
      make: "Ford",
    },
    {
      name: "Toyota",
      model: "Celica",
      price: 35000,
      color: "red",
      registration: "16/06/2022",
      make: "Ford",
    },
    {
      name: "Toyota",
      model: "Celica",
      price: 35000,
      color: "red",
      registration: "16/06/2022",
      make: "Ford",
    },
    {
      name: "Aoyota",
      model: "Celica",
      price: 35000,
      color: "red",
      registration: "16/06/2022",
      make: "Ford",
    },
  ];

  const columnDefs = [
    {
      field: "name",
      width: "auto",
      filter: "agTextColumnFilter",
      menuTabs: [],
    },
    { field: "model", width: "auto" },
    { field: "price", width: "auto" },
    { field: "color", width: "auto" },
    { field: "make", width: "auto" },
    { field: "registration", width: "auto" },
    {
      field: "edit",
      width: "auto",
      filter: false,
      cellRendererFramework: (params) => {
        const { data: rowData } = params;
        console.log(rowData, "row data");
        return (
          <div className="font-icon-wrapper" style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
        );
      },
    },
    {
      field: "delete",
      width: "auto",
      filter: false,
      cellRendererFramework: (params) => {
        const { data: rowData } = params;
        console.log(rowData, "row data");
        return (
          <div className="font-icon-wrapper" style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <h1 className="mb-3 text-center">
        <strong>Vehicles</strong>
      </h1>
      <div className=" d-flex w-100">
        <Button
          // onClick={login}
          className="mt-3 float-right"
          style={{
            height: "50px",
            border: "none",
            width: "200px",
            backgroundColor: "#FF007C",
            borderRadius: "10px",
            fontSize: "20px",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
        >
          <strong>Create</strong>
        </Button>
      </div>
      <div
        className="ag-theme-alpine text-center"
        style={{ height: 400, width: "100%" }}
      >
        <AgGridReact
          rowData={rowData}
          width="100%"
          animateRows={true}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            filter: true,
            width: 185,
            resizable: true,
            floatingFilter: true,
          }}
        />
      </div>
    </div>
  );
};

export default index;
