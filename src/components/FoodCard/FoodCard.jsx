
const FoodCard = ({ item }) => {
    
    const { name, recipe, image, price } = item;

    return (
        <div className="card bg-base-200 w-4/12 shadow-xl rounded-none">
            <figure className="">
                <img
                    src=''
                    alt="Shoes"
                    className="rounded-none w-full object-cover h-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Caeser Salad</h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 text-yellow-700 uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;