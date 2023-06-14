import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card, CardContent, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CardActions from "@mui/material/CardActions";
import BookFieldModal from "../user/BookFieldModal";
import FieldDetailsModal from "../user/FieldDetailsModal";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function IceSkating(props) {

    const [fields, setFields] = useState([]);

    useEffect(() => {
        getFields();
    }, []);

    function getFields() {
        axios
            .get('http://127.0.0.1:8000/sport/5/')
            .then((response) => {
                setFields(response.data);
                // console.log(fields)
                // console.log(response.data)
            })
            .catch((error) => {
                console.error('Error fetching fields:', error);
            });
    }

    return (
        <div className="cardContainer">
            <h1 className="sportHeader">{props.header}</h1>
            <div className="cardRow">
                {fields.length === 0 ? (
                    <h2>No fields for this category available at this time!</h2>
                ) : (
                    fields.map((field) => (
                        <Card className="card3" key={field.fields.id}>
                            <Carousel showThumbs={false}>
                                {field.fields.images.split("SPLIT").map((image) => (
                                    <div>
                                        <img src={image} alt="Field photo" />
                                    </div>
                                ))}
                            </Carousel>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    {field.fields.name}
                                </Typography>
                            </CardContent>
                            <CardActions className="d-flex justify-content-evenly">
                                <BookFieldModal field={field} user={props.user}/>
                                <FieldDetailsModal name={field.fields.name} address={field.fields.address}
                                                   details={field.fields.details} price={field.fields.price}/>
                            </CardActions>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}

export default IceSkating;
