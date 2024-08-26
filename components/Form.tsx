"use client"
import useKlaviyo from "@/hooks/useKlaviyo";
import { Profile, TempProfile } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";


export const Form = () => {
    //import de useKlaviyo
    const { profile, createProfile } = useKlaviyo();

    //state para los campos del form
    const [formData, setFormData] = useState<TempProfile>({
        email: '',
        phone_number: '',
        first_name: '',
        last_name: '',
        address: '',
        country: '',
        region: '',
        zip: '',
        fav_category: '',
        fav_color: ''
    });



    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //enviar datos al state
        createProfile(formData);




    }

    return (
        <>


            <form onSubmit={handleSubmit} className="bg-gray-900 max-w-3xl mx-auto p-6 rounded-lg shadow-lg space-y-3">
                <div className="mb-6">
                    <label htmlFor="first_name" className="block text-white text-lg font-semibold mb-2">Ingrese el nombre del nuevo usuario</label>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Ingrese el nombre del Profile"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="last_name" className="block text-white text-lg font-semibold mb-2">Ingrese el apellido del nuevo usuario</label>
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Ingrese el apellido del Profile"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-white text-lg font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone_number" className="block text-white text-lg font-semibold mb-2">Phone Number</label>
                    <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="address" className="block text-white text-lg font-semibold mb-2">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="country" className="block text-white text-lg font-semibold mb-2">Country</label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="region" className="block text-white text-lg font-semibold mb-2">Region</label>
                    <input
                        type="text"
                        name="region"
                        id="region"
                        value={formData.region}
                        onChange={handleChange}
                        placeholder="Region"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="zip" className="block text-white text-lg font-semibold mb-2">Zip</label>
                    <input
                        type="text"
                        name="zip"
                        id="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        placeholder="Zip"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="fav_category" className="block text-white text-lg font-semibold mb-2">Fav Category</label>
                    <input
                        type="text"
                        name="fav_category"
                        id="fav_category"
                        value={formData.fav_category}
                        onChange={handleChange}
                        placeholder="Fav Category"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="fav_color" className="block text-white text-lg font-semibold mb-2">Fav Color</label>
                    <input
                        type="text"
                        name="fav_color"
                        id="fav_color"
                        value={formData.fav_color}
                        onChange={handleChange}
                        placeholder="Fav Color"
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                />
            </form>

        </>
    );
}
