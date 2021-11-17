import {Container, Grid} from "@material-ui/core";
import React from "react";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 65}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width: 400, background: 'lightgray'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;