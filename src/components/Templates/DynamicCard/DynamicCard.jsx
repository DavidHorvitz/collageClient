import React from "react";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent } from "@mui/material";


export default function DynamicCard({ data, onButtonClickDelete,onButtonClickGetProperties }) {
    if (!data || data.length === 0) {
        return <p>No data to display.</p>;
    }
    const keys = Object.keys(data[0]);
    return (
        <div className="flex space-x-10 float-right shadow-inner">
            {data.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 500 }}>
                    
                    <CardMedia
                        sx={{ height: 100 }}
                        // image={item.ImageProfile}
                        image={item.ImageProfile || item.Image || null}
                        title="Image Profile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <span>{keys[1]} :  </span>
                            {item[keys[1]]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>{keys[2]} :  </span>
                            {item[keys[2]]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>{keys[3]} :  </span>
                            {item[keys[3]]}
                        </Typography>
                     
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => onButtonClickGetProperties(item)}>More</Button>
                        <Button size="small" onClick={() => onButtonClickDelete(item)}>Delete</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

