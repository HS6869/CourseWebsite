import React, { Fragment } from "react";
import {Form,FormGroup,Input,Button,Container} from 'reactstrap'
const Contact=()=>{
    return(
       <Fragment className="text-center">
        <h4>Contact Page</h4>
            <div style={{marginBottom:20}}><h6>Contact Us For Details</h6></div>
            <Form className="text-left" >
                <FormGroup>
                    <label for="fname">First Name</label>
                    <Input type="text" placeHolder="First Name" name="name" id="fname"/>

                   
                </FormGroup>

                <FormGroup>
                    <label for="lname">LastName</label>
                    <Input type="text" placeHolder="LastName" name="lname" id="lname"/>

                   
                </FormGroup>

                <FormGroup>
                    <label for="cnumber">Contact Number</label>
                   <Input type="number"  placeholder="Phone Number" id="cnumber"/> 
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Submit</Button>
                   
                </Container>
            </Form>

       </Fragment>
            
        
    );
};
export default Contact;