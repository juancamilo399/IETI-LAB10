import React from 'react'
import Card from '@material-ui/core/Card';
import {Fab } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

export const CardItem = ({description,responsible,status,dueDate,fileUrl}) => {
    

    const useStyles = makeStyles((theme)=>({
        
        root: {
            width: "350px",
            minWidth: 275,
           
        },
        title: {
            fontSize: 14,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
    }));

    const classes = useStyles();

    let showFile

        if(fileUrl.endsWith(".pdf")){
            showFile=<div style={{ margin: "auto",
            width: "50%",
            padding: "10px"}}>  
                        <a href={fileUrl}>
                        <Fab
                    color="primary"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                >
                    <PictureAsPdfIcon /> View File
                </Fab>      
                        </a>    
                     </div>
        }else{
            showFile= <CardMedia
            className={classes.media}
                        image={fileUrl}
                        title={description}
                    />
        }

    return (
        
        <div>
            <Grid  item xs={10}>
            <Card variant="outlined">
            {showFile}
                <CardContent>
                    
                    <Typography variant="h5" component="h2">
                        {description}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {`${status} - ${new Date(dueDate).toLocaleString()}`}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {responsible.name}
                    </Typography>
            
                </CardContent>
                
            </Card>
            </Grid>
            </div>    
    )
}
