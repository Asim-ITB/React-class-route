import { Box, useTheme } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../GlobalContext";
function Contact() {
  const theme = useTheme();
  console.log(theme.palette.primary.main);
  const contextValues = useContext(GlobalContext);
  const { backgroundColor, color } = contextValues;
  const [data, setData] = useState({});
  async function test() {
    try {
      let data = await axios({
        url: "http://localhost:5001/message",
      });
      console.log(data.data);
      setData(data.data);
    } catch (err) {
      window.alert(err.message);
      console.log(err.message);
    }
  }
  // async function postData() {
  //   a = 0;
  //   let postReq = await axios({
  //     method: "post",
  //     url: "http://localhost:5002/api",
  //     data: newData,
  //   });
  //   console.log(postReq);
  // }
  async function test2() {
    try {
      let data = await axios({
        url: "http://localhost:5001/secretData",
      });
      console.log(data.data);
    } catch (err) {
      window.alert(err.message);
      console.log(err.message);
    }
  }
  useEffect(() => {
    test();
    test2();
    console.log("This is my render");
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        display: "flex",
        justifyContent: "center",
      }}
      style={{}}
      component={"div"}
    >
      <Box
        sx={{
          maxWidth: "500px",
          display: "flex",
          justifyContent: "left",
          flexDirection: "column",
        }}
      >
        {/* {data.fact} */}
        {/* <Button onClick={() => catchError()}>Submit</Button> */}
        <button
          onClick={() => {
            test();
          }}
        >
          Fetch
        </button>
        <div>{data.name}</div>
        <div>{data.status}</div>
      </Box>
    </Box>
  );
}

export default Contact;
