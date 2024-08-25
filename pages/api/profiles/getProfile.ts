import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { profile_id } = req.query;

    // Validación de la API Key
    if (!process.env.KLAVIYO_PRIVATE_API_KEY) {
        return res.status(500).json({ error: 'API Key no configurada en el servidor' });
    }

    // Validación del profile_id
    if (!profile_id || typeof profile_id !== 'string') {
        return res.status(400).json({ error: 'profile_id es requerido y debe ser un string válido' });
    }

    try {
        const response = await axios.get(`https://a.klaviyo.com/api/profiles/${profile_id}/`, {
            headers: {
                accept: 'application/json',
                revision: '2024-07-15',
                Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_API_KEY}`
            }
        });

        // Enviar la respuesta exitosa al cliente
        res.status(200).json(response.data.data);

    } catch (error) {
        console.error('Error al obtener el perfil en Klaviyo:', error);

        if (axios.isAxiosError(error) && error.response) {
            return res.status(error.response.status).json({ error: error.response.data });
        } else {
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}
