import PropTypes from 'prop-types';
import '../App.css';
const Paragraph = ({ content }) => {

    return (
        <div className='paragraph'>
            <p>{content}</p>
        </div>
    );
}
Paragraph.defaultProps = {
    content: 'Default content',
}
Paragraph.protoTypes = {
    content: PropTypes.string.isRequired,
}
export default Paragraph;