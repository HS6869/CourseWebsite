import React from "react";
import { Card, CardBody } from "reactstrap";
function Header({name,title}){
    return(
        <div>
            <Card style={{marginTop:25}} color="warning" >
            <CardBody>
            <h1 className="text-center" style={{marginTop:20}}>Welcome To Courses Application</h1>
            </CardBody>
            </Card>
               
            
        </div>
    );
}
export default Header;
