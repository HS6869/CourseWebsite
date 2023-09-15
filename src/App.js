
import './App.css';
import { Button,Container,Row,Col} from 'reactstrap'
import { toast, ToastContainer } from 'react-toastify';
import Home from './components/Home';

import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Allcourses from './components/Allcourses';
import Menus from './components/Menu';
import {BrowserRouter as Router,Route} from 'react-router-dom' ;
import Contact from './components/Contact';






function App() {
  const btnHandle=()=>{
    toast.error("done",{
      position:"top-center",
    });
  }
  return(
    <div>
     <Router>
     <ToastContainer/>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
            <Menus/>
          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact/>
            <Route path="/add-course" component={AddCourse} exact/>
            <Route path="/view-courses" component={Allcourses} exact/>
            <Route path="/about" component={Home} exact/>
            <Route path="/contact" component={Contact} exact/>
            
           
           
           
           
          </Col>

        </Row>
      </Container>
     </Router>
       
    </div>   
    

  );
  
}

export default App;
