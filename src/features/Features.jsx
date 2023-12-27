import PropTypes from 'prop-types';
import { CiCircleCheck } from "react-icons/ci";

const Features = ({feature}) => {
    return (
        <p className='text-left flex items-center'><CiCircleCheck className='mr-3 font-semibold text-xl'></CiCircleCheck> {feature}</p>
    );
};
Features.propTypes={
    feature:PropTypes.string
}

export default Features;