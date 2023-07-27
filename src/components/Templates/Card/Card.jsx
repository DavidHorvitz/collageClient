import React from "react";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent } from "@mui/material";

export default function DynamicCard({ data }) {
    if (!data || data.length === 0) {
        return <p>No data to display.</p>;
    }
    console.log(data);
    return (
        <div className="flex space-x-10 float-right shadow-inner">
            {data.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={item.ImageProfile}
                        title="Image Profile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <span>Name: </span>
                            {item.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>Phone: </span>
                            {item.Phone_Number}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>Email: </span>
                            {item.Email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Properties</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}


