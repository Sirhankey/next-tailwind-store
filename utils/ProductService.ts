
import { NextApiResponse, NextApiRequest } from 'next';

async function getProducts(_: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch('/demo/data/products.json');
        const data = await response.json();
        res.status(200).json(data.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default getProducts;
