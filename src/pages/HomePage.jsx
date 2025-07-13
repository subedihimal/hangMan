import Button from '../components/Button';
import Background from '../components/Background';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <Link to='/singlePlayer'>
                <Button
                    text={"Single-Player"}
                />
            </Link>
            <Link to='/dualPlayer'>
                <Button
                 text={"Two-Player"}
                />
            </Link>
        </>
    )
}
export default HomePage;