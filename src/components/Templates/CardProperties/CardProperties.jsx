import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Templates/Spinner/Spinner";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteStudent } from "../../../store/actions/student/deleteStudent";
import { useLocation, useNavigate } from "react-router-dom";

export const CardProperties = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data to display.</p>;
  }
  const keys = Object.keys(data[0]);
  return (
    <div className=" h-full  space-y-5 pr-5 pl-5 float-right shadow-inner">
      {data.map((item, index) => (
        <Card key={index} className="border" sx={{ width: '100%' }}>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              <div className="text-left">
                <span className="font-bold">{keys[1]} :  </span>
                {item[keys[1]]}
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className="text-left pt-5">
                <span className="font-bold ">{keys[2]} :  </span>
                {item[keys[2]]}
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className="text-left pt-5">
                <span className="font-bold">{keys[3]} :  </span>
                {item[keys[3]]}
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className="text-left pt-5">
                <span className="font-bold">{keys[4]} :  </span>
                {item[keys[4]]}
              </div>
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
