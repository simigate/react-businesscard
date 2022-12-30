import PropTypes from 'prop-types';
import '../App.css';
const H1 = ({ title }) => {

    return (
        <div className='h1'>
            <h1 >{title}</h1>
        </div>

    );
}
H1.defaultProps = {
    title: 'Default title',
}
H1.protoTypes = {
    title: PropTypes.string.isRequired,
}
export default H1;