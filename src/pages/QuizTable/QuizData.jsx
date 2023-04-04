import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

// const Table = styled.table`
//   border-collapse: collapse;
//   width: 100%;
//   max-width: 800px;
//   margin: 0 auto;
//   th,
//   td {
//     padding: 0.5rem;
//     text-align: left;
//     border: 1px solid #ccc;
//   }
//   th {
//     background-color: #f2f2f2;
//   }
//   td button {
//     margin-right: 0.5rem;
//   }
// `;

const ActionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
`;
const EditLink = styled(Link)`
background-color: #5777ba;
color: #fff;
padding: 6px 10px;
border-radius: 5px;

&:hover {
  background-color: #4c7bdf;
}
`;
const Button = styled.button`
background-color: #a83535;
border: none;
padding: 6px 10px;
border-radius: 5px;
cursor: pointer;
color: #decaca;

&:hover {
  background-color: #9c2444;
}
`;

const QuizData = ({ questions, isLoading, error }) => {
  const { Id } = useParams();

  const editQUiz = questions?.find((question) => question?.id === Id);
  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleDelete = (id) => {
    const firebaseEndpoint = `https://quiz-app-c5011-default-rtdb.firebaseio.com/quizes/${Id}.json`;
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    // if (confirmed) {
    //   axios
    //     .delete(firebaseEndpoint)
    //     .then((response) => {
    //       setData(data.filter((item) => item.id !== id));
    //       toast.success("Quiz deleted successfully");
    //       // setTimeout(() => navigate("/quiz-data"), 5000);
    //     })

    //     .catch((error) => console.log(error));
    // }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) {
    return (
      <CircularProgress
        style={{ margin: 100 }}
        color="inherit"
        size={150}
        thickness={1}
      />
    );
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Question
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Options
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Answer
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Category
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions &&
              questions.map((row) => (
                <TableRow key={row.id} style={{
                  backgroundColor: row.id % 2 === 0 ? "#ffffff" : "#f3f2f7",
                }}>
                  <TableCell style={{ color: "#7775ef", fontWeight: "bold"}}>
                    {" "}
                    {row.question}{" "}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.options.join(", ")}
                  </TableCell>
                  <TableCell style={{ color: "#7775ef", fontWeight: "bold" }}>
                    {row.answer}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.category.toUpperCase()}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    <ActionWrapper>
                      <EditLink to={`/edit/${row.id}`}>Edit</EditLink>
                      <Button onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                    </ActionWrapper>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={questions?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <button>Hompage</button>
      <button>Add More</button>
    </div>
  );
};

export default QuizData;
