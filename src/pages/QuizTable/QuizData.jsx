import {
  Button,
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
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ActionWrapper, Btn, BtnWrapper, EditLink } from "./quizData.styles";

const QuizData = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://quiz-app-c5011-default-rtdb.firebaseio.com/quizes.json");
        const data = response.data;
        const fetchedQuestions = [];
        for (const key in data) {
          fetchedQuestions.push({
            id: key,
            ...data[key],
          });
        }
        setQuestions(fetchedQuestions);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const firebaseEndpoint = `https://quiz-app-c5011-default-rtdb.firebaseio.com/quizes/${id}.json`;
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      try {
        await axios.delete(firebaseEndpoint);
        toast.success("Quiz deleted successfully");
        onDataChange();
      } catch (error) {
        console.log(error);
      }
    }
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
    <div style={{ padding: "0px 20px" }}>
      <ToastContainer />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell
                style={{
                  color: "#8281cc",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                QUESTIONS
              </TableCell>
              <TableCell
                style={{
                  color: "#8281cc",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                OPTIONS
              </TableCell>
              <TableCell
                style={{
                  color: "#8281cc",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                ANSWER
              </TableCell>
              <TableCell
                style={{
                  color: "#8281cc",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                CATEGORY
              </TableCell>
              <TableCell
                style={{
                  color: "#8281cc",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions &&
              questions.map((row) => (
                <TableRow
                  key={row.id}
                  style={{
                    backgroundColor: row.id % 2 === 0 ? "#ffffff" : "#f3f2f7",
                  }}
                >
                  <TableCell style={{ color: "#7775ef", fontWeight: "bold" }}>
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
                    {row.category?.toUpperCase()}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    <ActionWrapper>
                      <EditLink to={`/edit/${row.id}`}>Edit</EditLink>
                      <Btn onClick={() => handleDelete(row.id)}>Delete</Btn>
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
      <BtnWrapper>
        <Button
          variant="contained"
          size="large"
          style={{
            alignSelf: "center",
            marginTop: 20,
            backgroundColor: "#5777ba",
            color: "#fff",
          }}
          href="/"
        >
          {" "}
          Go To Hompage{" "}
        </Button>
        <Button
          variant="contained"
          size="large"
          style={{
            alignSelf: "center",
            marginTop: 20,
            backgroundColor: "#5777ba",
            color: "#fff",
          }}
          href="/new-quiz"
        >
          {" "}
          Add More{" "}
        </Button>
      </BtnWrapper>
    </div>
  );
};

export default QuizData;
