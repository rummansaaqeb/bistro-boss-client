import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {

    const { name, recipe, image, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // send cart item to database
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    }

    return (
        <div className="card bg-base-200 w-96 shadow-xl rounded-none">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-none w-full object-cover h-[300px]" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3 py-1">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline border-0 border-b-4 text-yellow-700 uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;