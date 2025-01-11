import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import cardImg from '../../../assets/home/slide1.jpg';

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle heading={"Chef Recommends"} subHeading={"Should Try"}></SectionTitle>
            <div className="flex items-center gap-6">
                {/* Card 1 */}
                <div className="card bg-base-200 w-4/12 shadow-xl rounded-none">
                    <figure className="">
                        <img
                            src={cardImg}
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

                {/* Card 2 */}
                <div className="card bg-base-200 w-4/12 shadow-xl rounded-none">
                    <figure className="">
                        <img
                            src={cardImg}
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

                {/* Card 3 */}
                <div className="card bg-base-200 w-4/12 shadow-xl rounded-none">
                    <figure className="">
                        <img
                            src={cardImg}
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

            </div>
        </section>
    );
};

export default ChefRecommends;