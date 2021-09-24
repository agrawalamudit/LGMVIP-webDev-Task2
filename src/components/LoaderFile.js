import React from 'react';
import { Container} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'

const Loading=()=>{

    return(
        <div style={{background:"rgb(39, 39, 39)",paddingBottom:"90%"}}>
      <Container>
          <p className="msg">Loading....</p>
          <Spinner className="spinner" animation="border" /> 
      </Container>
      </div>
    )
    
}

export default Loading;