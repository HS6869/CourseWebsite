import axios from "axios";
import React, { useEffect} from "react";
import {Container,Button} from "reactstrap";
const Home=()=>{
    

    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        
        document.title="Home";

    },[])
    return(
        <div class="jumbotron text-center bg-light" style={{paddingRight:10,paddingTop:50}} >
            <h1 className="center" style={{marginTop:15}}>This Project Is Developed By Harshith S</h1>
            <p>
                This is Developed By Harshith S for Demonstration,it uses spring boot on back end 
                and react JS on Front End 
            </p>
            <Container>
                <Button color="info" outline>Start Using </Button>
           
            </Container>


        </div>
    )
}

export default Home;