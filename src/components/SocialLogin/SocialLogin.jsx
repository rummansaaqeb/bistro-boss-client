import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result);
        })
    }

    return (
        <div className="mt-5 mx-auto w-full">
            <div>
                <button onClick={handleGoogleSignIn} className="btn w-full">
                    <FaGoogle></FaGoogle>
                    Sign Up With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;