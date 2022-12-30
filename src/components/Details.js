
import '../App.css';
import H1 from './H1'
import Paragraph from './Paragraph'
//Used to Display About and Interest
const Details = ({ title, content }) => {

    return (
        <div className='App-details'>
            <H1 title={title} />
            <Paragraph content={content}></Paragraph>
        </div>
    );
}
export default Details;