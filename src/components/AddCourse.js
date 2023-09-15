import axios from "axios";
import React, { Fragment,useEffect,useState } from "react";
import { Container, Form ,FormGroup,Input,Button} from "reactstrap";
import base_url from "../api/bootapi";
import {  toast } from 'react-toastify';
const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course";

    },[]);

    const [course,setCourse]=useState({});
    //form Handler Function
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        
      e.preventDefault();
    };

    //creating a function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("Page Loaded Successfully")
                setCourse({id:"",title:"",description:""});

            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )


    };  

    const addCourse=()=>{
        toast.success("Courses are Successfully added");
    }
    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter Id Here" name="userId" id="userId" 
                    onChange={(e)=>{
                        setCourse({...course,id:e.target.value});
                    }}
                    />

                   
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here"  id="title"
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value})
                    }}/>

                   
                </FormGroup>

                <FormGroup>
                    <label for="description">Description</label>
                   <Input type="textarea"  placeholder="Enter description here" id="description" style={{height:200}}
                   onChange={(e)=>{
                    setCourse({...course,description:e.target.value})
                }}/> 
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success" style={{marginRight:15}} onClick={addCourse}>Add Course</Button>
                    <Button type="reset" color="warning" onClick={()=>{
                        setCourse({id:"",title:"",description:""});
                    }} >Clear</Button>
                </Container>
            </Form>

        </Fragment>
    );
};
export default AddCourse;