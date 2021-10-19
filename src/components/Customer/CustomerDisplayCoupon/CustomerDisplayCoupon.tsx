import CouponModel from "../../../models/CouponModel";
import { StyledCard } from "../../UI/Card/Card.styled";


const CustomerDisplayCoupon: React.FC<{ coupon: CouponModel }> = (props) => {
    return (
        <StyledCard >
            <div style={{marginBottom:"20px"}}>
                <h3>
                    {props.coupon.title}
                </h3>
            </div>
            <div style={{ maxWidth: "300px", textAlign: "left" }}>
                <div>
                    <strong>description:</strong> {props.coupon.description}
                </div>
                <div>
                    <strong>category:</strong> {props.coupon.category}
                </div>
                <div>
                    <strong>price:</strong> {props.coupon.price}
                </div>
                <div>
                    <strong>start date:</strong> {props.coupon.startDate}
                </div>
                <div>
                    <strong>end date:</strong> {props.coupon.endDate}
                </div>
            </div>
        </StyledCard>
    );
}
export default CustomerDisplayCoupon;