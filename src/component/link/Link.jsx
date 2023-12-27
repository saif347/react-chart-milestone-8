import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name}= route
    return (
        <li className='hover:bg-amber-600 p-2 rounded-lg text-white'>
            <a href={path}>{name}</a>
        </li>
    );
};
Link.propTypes={
    route: PropTypes.object.isRequired

}

export default Link;