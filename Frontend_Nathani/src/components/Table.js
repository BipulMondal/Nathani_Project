import React from "react";

// Components
import { MDBDataTable } from "mdbreact";


export default function Table(props) {
  const {
    striped,
    tableTitle,
    data,
    modal,
    setModal,
    modalToggleView,
    renderModalView,
    paging = true,
    isSearchable = true,
    onSearch,
  } = props;

  return (
    <>
      <div className="main-card mb-3 card table-hover">
        <div className="text-center fs-2">{tableTitle}</div>
        {isSearchable && <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0px 10px",
          }}
        >
          <input
            className="form-control"
            style={{ width: "40%" }}
            type="text"
            placeholder="search"
            // value={s}
            onChange={(val) => onSearch(val.target.value)}
          />
        </div>}

          <MDBDataTable
            striped
            data={data}
            searching={false}
            paging={paging}
          // onSearch={onSearch}
          />

      </div>
      {/* {modal && (
        <Modal
          modalToggleView={modalToggleView}
          renderModalView={renderModalView}
          closeModal={setModal}
        />
      )} */}
    </>
  );
}
