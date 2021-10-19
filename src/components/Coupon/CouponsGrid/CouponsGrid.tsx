
import { Grid } from "@mui/material";
import CouponModel from "../../../models/CouponModel";
import { StyledContainer } from "../../styles/StyledContainer.style";
import SmallCoupon from "../SmallCoupon/SmallCoupon";


const CouponsGrid: React.FC<{ coupons: CouponModel[] }> = (props) => {
    const displayCoupons=props.coupons.map(coupon =>
        <Grid item lg={3} md={4} xs={12} key={coupon.id}>
            <SmallCoupon coupon={coupon} key={coupon.id}/>
        </Grid>
    );  
    return (
        <StyledContainer>
            <Grid container spacing={2} justifyContent="center">
                {displayCoupons}
            </Grid>
        </StyledContainer>
    );
}
export default CouponsGrid;