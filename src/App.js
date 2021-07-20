import React from 'react';
import Navigations from './course/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
       <Navigations name="Courses" bg="dark"  expand="lg" dropDownTitle="Course list"/>
    
    </div>
  );
}

export default App;
