import React, { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';

const Dashboard = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("Authorization")
  useEffect(() => {
    console.log("eeee", localStorage.getItem("userType"), "Student")
    if(localStorage.getItem("userType") === "Student"){
      navigate("/studentProfile");
    }
    else{
      navigate("/");
    }
  }, [token])

  // let filterData = []

  // const tableData = useMemo(() => {
  //   return {
  //     columns: [
  //       {
  //         label: "SL",
  //         field: "sl",
  //         sort: "desc",
  //         width: 270,
  //       },
  //       {
  //         label: "Name",
  //         field: "name",
  //         sort: "desc",
  //         width: 100,
  //       },
  //       {
  //         label: "Access Priviledege",
  //         field: "accessPriviledege",
  //         sort: "desc",
  //         width: 100,
  //       },
  //       {
  //         label: "Email",
  //         field: "email",
  //         sort: "asc",
  //         width: 200,
  //       },
  //       {
  //         label: "Status",
  //         field: "status",
  //         sort: "asc",
  //         width: 100,
  //       },
  //       {
  //         label: "Action",
  //         field: "action",
  //         sort: "asc",
  //         width: 150,
  //       },
  //     ],
  //     rows:
  //       filterData().length > 0
  //         ? filterData().map((item, idx) => {
  //             return {
  //               sl: idx + 1,
  //               accessPriviledege:(
  //                 item?.assignAccess.toString()
  //               ),
  //               name: (
  //                 <div className="widget-content p-0">
  //                   <div
  //                     className="widget-content-wrapper"
  //                     style={{ alignItems: "center", justifyContent: "center" }}
  //                   >
  //                     <div className="widget-content-left me-3">
  //                       <div className="widget-content-left">
  //                         <img
  //                           style={{
  //                             borderRadius: "3px",
  //                             height: "80px",
  //                             width: "80px",
  //                           }}
  //                           src={
  //                             item?.image
  //                               ? item?.image
  //                               : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
  //                           }
  //                           alt="Avatar"
  //                         />
  //                       </div>
  //                     </div>
  //                     <div className="widget-content-left flex2">
  //                       <div className="zwidget-heading" style={{ opacity: 1 }}>
  //                         {item?.firstName + " " + item?.lastName}
  //                       </div>
  //                       {/* <div className="widget-subheading opacity-7">UI Designer</div> */}
  //                     </div>
  //                   </div>
  //                 </div>
  //               ),

  //               email: item.email,
  //               status: (
  //                 // <button
  //                 //   className={`badge ${
  //                 //     item?.status ? "bg-success" : "bg-danger"
  //                 //   } border-0`}
  //                 //   onClick={() => changeStatus(item?._id)}
  //                 // >
  //                 //   {item?.status ? "Active" : "Deactivated"}
  //                 // </button>
  //                 <div>
  //                   {/* {!statusLoaders[idx]?.loader ? (
  //                     <div class="form-check form-switch">
  //                       <input
  //                         class="form-check-input"
  //                         type="checkbox"
  //                         role="switch"
  //                         checked={item.status}
  //                         onChange={() => changeStatus(item._id, idx)}
  //                       />
  //                     </div>
  //                   ) : (
  //                     <div
  //                       className="spinner-grow spinner-grow-sm text-primary"
  //                       role="status"
  //                     >
  //                       <span className="sr-only">Loading...</span>{" "}
  //                     </div>
  //                   )} */}
  //                 </div>
  //               ),
  //               action: (
  //                 <div>
  //                   <button
  //                     className="me-2 btn-icon btn-icon-only btn btn-outline-danger"
  //                     // onClick={() => {
  //                     //   openModal();
  //                     //   setmodalToggleView(0);
  //                     //   setdeleteId(subadminData[idx]?._id);
  //                     // }}
  //                   >
  //                     <i className="fa-solid fa-trash-can" />
  //                   </button>
  //                   <button
  //                     className="me-2 btn-icon btn-icon-only btn btn-outline-success"
  //                     onClick={() => {
  //                       navigate(`/edit-admin/${item?._id}`);
  //                     }}
  //                   >
  //                     <i class="fa-regular fa-pen-to-square"></i>
  //                   </button>
  //                 </div>
  //               ),
  //             };
  //           })
  //         : [],
  //   };
  // }, []);


  return (
    <div>
      {/* <Table
        striped
        tableTitle={"All Admins"}
        data={tableData}
        // modal={modal}
        // setModal={setModal}
        // modalToggleView={modalToggleView}
        // renderModalView={renderModalView}
        // onSearch={(val) => setsearchText(val)}
      /> */}

      Dashboard
    </div>
  )
}

export default Dashboard
