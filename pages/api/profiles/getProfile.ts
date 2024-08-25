import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { privateApiKey } = req.body;

    // if (!privateApiKey) {
    //     return res.status(400).json({ error: 'Falta la Private API Key' });
    // }

    try {
        const response = await axios.get("https://a.klaviyo.com/api/profiles/?page[size]=100", {
            headers: {
                accept: 'application/json',
                revision: '2024-07-15',
                Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_API_KEY}`
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error al obtener perfiles de Klaviyo:', error);
        
        if (axios.isAxiosError(error) && error.response) {
            // Manejo específico de errores de Axios
            return res.status(error.response.status).json({ error: error.response.data });
        } else {
            // Error genérico
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}
