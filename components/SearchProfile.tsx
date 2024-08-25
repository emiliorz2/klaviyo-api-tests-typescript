"use client"
import { Profile } from "@/types";
import { FormEvent, useState } from "react";
import { ProfileBox } from "./ProfileBox";
import useKlaviyo from "@/hooks/useKlaviyo";


export const SearchProfile = () => {
    const { getProfile, searchedProfile } = useKlaviyo();
    const [profileId, setProfileId] = useState<string>('');
    const [showProfile, setShowProfile] = useState<boolean>(false);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setProfileId(e.currentTarget.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Buscando perfil con el id: ', profileId);
        getProfile(profileId);
        setShowProfile(true);


    }
    return (
        <>
            <form className="flex justify-center max-w-7xl mx-auto gap-2" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Buscar perfil"
                value={profileId}
                onChange={handleChange}
                className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                    value="Buscar"
                    placeholder="Ingrese el id del perfil"
                />
            </form>

            <div className="mx-auto max-w-7xl">
                {/* Aqui se va a mostrar el perfil */
                    // si el profile id esta asignado entonces mostrar el profile 
                    showProfile ? (
                            
                        <>
                            <h2 className="uppercase text-center text-2xl font-black mb-5 mt-5 text-blue-900">El profile que buscaste es:</h2>
                            <ProfileBox profile={searchedProfile} />
                        </>
                    ) : (
                        <h2 className="uppercase text-center text-2xl font-black mb-5 mt-5 text-red-900">No se ha encontrado el perfil o no se ha realizado una busqueda</h2>
                    )
                }

            </div>
        </>
    )
}
