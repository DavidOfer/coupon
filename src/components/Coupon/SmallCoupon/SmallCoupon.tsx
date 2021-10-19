import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea } from '@mui/material';
import CouponModel from '../../../models/CouponModel';
import { useHistory } from 'react-router';
import { theme } from '../../../styles/LightTheme';


const SmallCoupon : React.FC<{ coupon: CouponModel }> = (props) => {
  const history =useHistory();
  const pushHandler = ()=>{
    history.push('/coupons/' + props.coupon.id)
  }
  return (

    <Card sx={{ maxWidth: 345, backgroundColor:"grey"}} onClick={pushHandler}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={props.coupon.image}
          // src={`${process.env.PUBLIC_URL}/assets/CouponImages/Small/${props.coupon.image}`}
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor:theme.colors.secondary}}>
          <Typography gutterBottom variant="h6" component="div">
            {props.coupon.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

}
export default SmallCoupon;