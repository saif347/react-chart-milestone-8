import PropTypes from 'prop-types';
import Features from '../../features/Features';


const PriceOption = ({option}) => {
    const {price, name, features} = option
    return (
        <div className='text-center bg-blue-500 p-4 flex flex-col rounded-xl text-white'>
            <h1 className="text-7xl font-bold">{price}<span className='text-4xl font-semibold'>/mon</span></h1>
            <h3 className='text-xl font-semibold my-6'>{name}</h3>
            <div className='pl-8 flex-grow'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features> )
                }
            </div>
            <br />
           <button className='text-xl font-medium py-2 w-full bg-blue-700 rounded-lg hover:bg-blue-900'>Buy Now</button>
            
        </div>
    );
};
PriceOption.propTypes={
    option: PropTypes.object
}

export default PriceOption;