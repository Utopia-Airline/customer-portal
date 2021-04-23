import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Card, CardActions, CardContent, Input, MenuItem, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import User from "../../models/User";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const ContactInformationComponent = ({ handleSave, user, contactInfo}: ContactProp) => {
    const classes = useStyles();

    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");

    useEffect(() => {
        if(user){
            const contactEmail = user.email;
            const contactPhone = user.phone;
            handleSave({contactEmail, contactPhone});
        }
    }, [])

    return(
        <div>
            <Card className="add-passengers" variant="outlined">
                {!user && !contactInfo && <CardContent>
                    <Form className={classes.root}>
                        <div>
                            <TextField placeholder="Email" onChange={e => setContactEmail(e.target.value)}/>
                        </div>
                        <div>
                            <TextField placeholder="Phone Number" onChange={e => setContactPhone(e.target.value)}/>
                        </div>
                    </Form>
                    <Button onClick={() => handleSave({contactEmail, contactPhone})}>Save</Button>
                </CardContent>}
                {user && <CardContent>
                        <div>
                            <TextField placeholder={user.email} disabled/>
                        </div>
                        <div>
                            <TextField placeholder={user.phone} disabled/>
                        </div>
                    </CardContent>}
                {!user && contactInfo && <CardContent>
                    <Form className={classes.root}>
                        <div>
                            <TextField placeholder={contactInfo.contactEmail} disabled/>
                        </div>
                        <div>
                            <TextField placeholder={contactInfo.contactPhone} disabled/>
                        </div>
                    </Form>
                </CardContent>}
            </Card>
        </div>
    )
}

interface ContactProp {
    handleSave?: Function;
    user?: User;
    contactInfo?: any;
}

export default ContactInformationComponent;