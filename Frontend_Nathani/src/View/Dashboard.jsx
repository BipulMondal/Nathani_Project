import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchText, setsearchText] = useState("");
  const {
    allStudents,
    getAllStudentdata,
    url,
    isLoading,
    getSingleStudentData,
  } = useContext(GlobalContext);
  const token = localStorage.getItem("Authorization");

  console.log("allStudents", allStudents);

  useEffect(() => {
    if (localStorage.getItem("userType") === "Student") {
      navigate("/studentProfile");
    } else {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    getAllStudentdata();
  }, []);

  const filterData = () => {
    if (searchText !== "") {
      return allStudents.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return allStudents;
  };

  const tableData = useMemo(() => {
    return {
      columns: [
        {
          label: "SL",
          field: "sl",
          sort: "desc",
          width: 270,
        },
        {
          label: "Name",
          field: "name",
          sort: "desc",
          width: 100,
        },
        {
          label: "Aadhar No",
          field: "aadharno",
          sort: "desc",
          width: 100,
        },
        {
          label: "Phone",
          field: "phone",
          sort: "asc",
          width: 200,
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 100,
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
          width: 150,
        },
      ],
      rows:
        filterData().length > 0
          ? filterData().map((item, idx) => {
              console.log("weewew", item?.studentInfo);
              return {
                sl: idx + 1,
                name: (
                  <div className="widget-content p-0">
                    <div
                      className="widget-content-wrapper"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <div className="widget-content-left me-3">
                        <div className="widget-content-left">
                          {/* <img
                            style={{
                              borderRadius: "3px",
                              height: "80px",
                              width: "80px",
                            }}
                            src={
                              item?.image
                                ? item?.image
                                : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                            }
                            alt="Avatar"
                          /> */}
                        </div>
                      </div>
                      <div className="widget-content-left flex2">
                        <div className="zwidget-heading" style={{ opacity: 1 }}>
                          {item?.studentInfo?.firstName +
                            " " +
                            item?.studentInfo?.lastName}
                        </div>
                        {/* <div className="widget-subheading opacity-7">UI Designer</div> */}
                      </div>
                    </div>
                  </div>
                ),

                aadharno: item?.studentInfo?.aadharNo,
                phone: item?.studentInfo?.StudentMobileNo,
                email: item?.studentInfo?.StudentEmail,
                action: (
                  <div>
                    <button
                      className="me-2 btn-icon btn-icon-only btn btn-outline-success"
                      onClick={() => {
                        getSingleStudentData(item?._id);
                        localStorage.setItem("studentId", item?._id);
                        navigate("/studentProfile");
                      }}
                    >
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button
                      className="me-2 btn-icon btn-icon-only btn btn-outline-danger"
                      onClick={() => {
                        handleDelete(item?._id);
                      }}
                    >
                      <i className="fa-solid fa-trash-can" />
                    </button>
                  </div>
                ),
              };
            })
          : [],
    };
  }, [allStudents, searchText]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`${url}/delete_Student/${id}`);
          if (res && res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            getAllStudentdata();
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the student.",
            icon: "error",
          });
          toast.error(error.message);
        }
      }
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <Table
          striped
          tableTitle={"All Students details"}
          data={tableData}
          onSearch={(val) => setsearchText(val)}
        />
      </div>
    </>
  );
};

export default Dashboard;
