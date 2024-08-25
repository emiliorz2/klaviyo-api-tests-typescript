import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Profile } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Validación de la API Key
    if (!process.env.KLAVIYO_PRIVATE_API_KEY) {
        return res.status(500).json({ error: 'API Key no configurada en el servidor' });
    }

    // Obtener los datos del perfil desde la request
    const newUser: Profile = req.body;

    // Validación básica de datos
    if (!newUser.attributes || !newUser.attributes.email || !newUser.attributes.first_name || !newUser.attributes.last_name) {
        return res.status(400).json({ error: 'Faltan campos requeridos en el perfil' });
    }

    try {
        console.log("Datos que se están enviando a Klaviyo:", {
            data: {
                type: 'profile',
                attributes: {
                    location: {
                        address1: newUser.attributes.location?.address1,
                        country: newUser.attributes.location?.country,
                        region: newUser.attributes.location?.region,
                        zip: newUser.attributes.location?.zip
                    },
                    properties: {
                        fav_category: newUser.attributes.properties?.fav_category,
                        fav_color: newUser.attributes.properties?.fav_color
                    },
                    email: newUser.attributes.email,
                    phone_number: newUser.attributes.phone_number,
                    first_name: newUser.attributes.first_name,
                    last_name: newUser.attributes.last_name,
                    external_id: newUser.attributes.external_id
                }
            }
        });

        // Cuerpo de la solicitud
        const data = {
            data: {
                type: 'profile',
                attributes: {
                    location: {
                        address1: newUser.attributes.location?.address1,
                        country: newUser.attributes.location?.country,
                        region: newUser.attributes.location?.region,
                        zip: newUser.attributes.location?.zip
                    },
                    properties: {
                        fav_category: newUser.attributes.properties?.fav_category,
                        fav_color: newUser.attributes.properties?.fav_color
                    },
                    email: newUser.attributes.email,
                    phone_number: newUser.attributes.phone_number,
                    first_name: newUser.attributes.first_name,
                    last_name: newUser.attributes.last_name,
                    external_id: newUser.attributes.external_id
                }
            }
        };

        // Configuración de los headers
        const config = {
            headers: {
                accept: 'application/json',
                revision: '2024-07-15',
                'content-type': 'application/json',
                Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_API_KEY}`
            }
        };

        // Realizando la solicitud POST
        const response = await axios.post("https://a.klaviyo.com/api/profiles/", data, config);

        // Enviar la respuesta exitosa al cliente
        res.status(200).json(response.data);

    } catch (error) {
        console.error('Error al crear el perfil en Klaviyo:', error);

        if (axios.isAxiosError(error) && error.response) {
            return res.status(error.response.status).json({ error: error.response.data });
        } else {
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}
