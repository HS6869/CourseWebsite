import React, { useState,useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from 'axios';
import { toast } from "react-toastify";


const Allcourse=()=>{

    useEffect(()=>{
        document.title="All Courses";
    },[]);

    

    //function to call server

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
            
             console.log(response.data);
             toast.success("All Courses Loaded Successfully");
             setCourses(response.data);
        
            },
            (error)=>{
                console.log(error);
            }
        
        );
    };
//calling loading course function
useEffect(()=>{
    getAllCoursesFromServer();

},[]);

    const [courses,setCourses]=useState([]);
    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!==id));

    }
    return(
       <div>
        <h1>All Courses</h1>
        <p>List Of Courses Available</p>
        {courses.length>0?courses.map((item)=>(
            <Course key={item.id} course={item} update={updateCourses}/>
           )):"No Courses"
             
        }
       </div>
    );
    

};
export default Allcourse;