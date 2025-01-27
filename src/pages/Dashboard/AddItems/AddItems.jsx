import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <SectionTitle heading='add an item' subHeading='Whats New?'></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full my-6">
                    <div className="label">
                        <span className="label-text">Recipe Name*</span>
                    </div>
                    <input {...register('name', { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" required />
                </label>
                <div className="flex gap-6">
                    {/* category */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select {...register('category', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled selected>Select A Category</option>
                            <option value="salad">Salad</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </label>
                    {/* price */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input {...register('price', { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* recipe details */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details*</span>
                    </div>
                    <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </label>
                {/* img input */}

                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn bg-gradient-to-r from-yellow-700 to-yellow-400 text-white font-bold">Add Item <FaUtensils></FaUtensils></button>
            </form>
        </div>
    );
};

export default AddItems;