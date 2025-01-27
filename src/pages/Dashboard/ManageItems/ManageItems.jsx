import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
    const [menu] = useMenu();

    const handleDeleteItem = (item) => {

    }

    return (
        <div>
            <SectionTitle heading='Manage All Items' subHeading="Hurry Up"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td className="text-right">${item.price}</td>
                            <td>
                                <button className="btn btn-ghost btn-lg">
                                    <FaEdit></FaEdit>
                                    </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeleteItem(item)}
                                    className='btn btn-ghost btn-lg'>
                                    <FaTrashAlt className='text-red-700'></FaTrashAlt>
                                </button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;