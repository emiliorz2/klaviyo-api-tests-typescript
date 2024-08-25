"use client"
import { Profile, TempProfile } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function useKlaviyo() {

    // State para profiles
    const [profiles, setProfiles] = useState<Profile[]>([]);

    const INITIAL_STATE_PROFILE: Profile = {
        id: "",
        attributes: {
            location: {
                address1: '',
                country: '',
                region: '',
                zip: ''
            },
            properties: {
                fav_category: '',
                fav_color: ''
            },
            email: '',
            phone_number: '',
            first_name: '',
            last_name: '',
            external_id: ''
        }
    };

    // State para nuevo usuario
    const [profile, setProfile] = useState<Profile>(INITIAL_STATE_PROFILE);

    // Función para asignar valores del nuevo usuario y crear el perfil
    const createProfile = (tempProfile: TempProfile) => {
        const newProfile: Profile = {
            id: "",
            attributes: {
                location: {
                    address1: tempProfile.address,
                    country: tempProfile.country,
                    region: tempProfile.region,
                    zip: tempProfile.zip
                },
                properties: {
                    fav_category: tempProfile.fav_category,
                    fav_color: tempProfile.fav_color
                },
                email: tempProfile.email,
                phone_number: tempProfile.phone_number,
                first_name: tempProfile.first_name,
                last_name: tempProfile.last_name,
                external_id: uuidv4()
            }
        };

        // Actualizar el estado con el nuevo perfil
        setProfile(newProfile);

        // Enviar los datos al backend
        axios.post('/api/profiles/createProfile', newProfile)
            .then(response => {
                console.log(response.data);
                setProfiles(prevProfiles => [...prevProfiles, newProfile]); // Actualizar la lista de perfiles
            })
            .catch(error => {
                console.error(error);
            });
    };

    // Función para obtener los perfiles
    const getProfiles = async () => {
        try {
            const response = await axios.post('/api/profiles/getProfiles');
            const data = response.data.data;
            console.log(data);
            setProfiles(data);
        } catch (error) {
            console.error(error);
        }
    };

    // Ejecutar getProfiles al montar el componente
    useEffect(() => {
        getProfiles();
    }, []);

    return {
        profiles,
        profile,
        createProfile
    };
}
