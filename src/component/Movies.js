import React, { Fragment , useEffect, useState} from "react";
import "./Movies.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Imges from "../assets/badboys.webp";
// import Imge2 from "../assets/sting.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {MoviesApi} from '../component/axios'

const Movies = () => {
  const [data, setData] = useState([])
  
  // how to call an api in react.js
  // how to set the data in state which i got in api react.js
  // display the state in return function in react.js

  useEffect(() => {
    fetchData();
  })
  const fetchData = async () => {
    try{
      const moviesreponse=await MoviesApi();
      console.log("moviesreponse", moviesreponse)
      setData(moviesreponse?.data?.result || [])
    }
   catch(error){
    console.error('ERROR FETCHING DATA' ,error);
  }finally{
    console.error('')
  }}
  return (

    <Fragment>
      <Container style={{ paddingTop: "50px" }}>
        {/* 1 */}

        <Row>
        {data?.map((item, index)=> (
          <Col>
            <Card style={{ width: "280px", borderRadius: "8px"}}>
              <Card.Img variant="top" src={item.imge} style={{ width: "280px", borderRadius: "8px", height: "250px" }} />
              <Card.Body style={{ padding: "10px" }}>
                <Card.Title style={{ textAlign: "left", margin: "0", padding: "0" ,fontWeight: 'bold' }}>{item?.title}</Card.Title>
                <Card.Text style={{ color: "black", textAlign: "left", margin: "0", padding: "0" }}>
                  {item?.desciption}
                </Card.Text>
                <Button variant="primary" style={{ margin: "10px" }}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>

      </Container>
      
    </Fragment>
  );
};
export default Movies;
