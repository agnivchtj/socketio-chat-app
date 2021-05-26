import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div>
            <div>
                <Grid container className="outer-container">
                    <Card className="inner-container">
                        <CardHeader className="header" title={'Prattle.io'} />
                        <CardContent>
                            <div>
                                <TextField fullWidth label="Name" type="text" onChange={(event) => setName(event.target.value)} />
                                <TextField fullWidth label="Room" type="text" onChange={(event) => setRoom(event.target.value)} />
                            </div>
                        </CardContent>
                        <CardActions className="card-actions">
                            <Link 
                                onClick={(e) => (!name || !room) ? e.preventDefault() : null} 
                                to={`/chat?name=${name}&room=${room}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button variant="contained" size="large" color="secondary">Join</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </div>
        </div>
    );
}

export default Join;