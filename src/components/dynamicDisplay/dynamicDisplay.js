import { selectUserLoginState } from '../../redux/features/authSlice';
import { useSelector } from 'react-redux';

const SigninDisplay = ({ children }) => {
    // use the useSelctor hook to access the current login state
    const userLoggedIn = useSelector(selectUserLoginState);
    // condition/logic to display logout when the user is logged in
    if (userLoggedIn) {
        return children;
    } else {
        return null;
    }
}

export const SignoutDisplay = ({ children }) => {
    // use the useSelctor hook to access the current login state
    const userLoggedIn = useSelector(selectUserLoginState);
    // condition/logic to display logout when the user is logged out
    if (!userLoggedIn) {
        return children;
    } else {
        return null;
    }
}

export default SigninDisplay;
