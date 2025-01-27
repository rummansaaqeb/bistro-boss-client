import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { _id, name, recipe, category, price } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success === true) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Item Updated Successfully!",
                    text: ` ${data.name} Is Updated On The Menu Now`,
                    icon: "success"
                });
                // reset();
            }
        }
        console.log('with image url', res.data);
    };
    return (
        <div>
            <SectionTitle heading='Update Item' subHeading={"Update an item"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full my-6">
                    <div className="label">
                        <span className="label-text">Recipe Name*</span>
                    </div>
                    <input defaultValue={name} {...register('name', { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" required />
                </label>
                <div className="flex gap-6">
                    {/* category */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue={category} {...register('category', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select A Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </label>
                    {/* price */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input defaultValue={price} {...register('price', { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* recipe details */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details*</span>
                    </div>
                    <textarea defaultValue={recipe} {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </label>
                {/* img input */}

                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn bg-gradient-to-r from-yellow-700 to-yellow-400 text-white font-bold">Update Item <FaUtensils></FaUtensils></button>
            </form>
        </div>
    );
};

export default UpdateItem;