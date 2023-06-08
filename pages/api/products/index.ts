import type { NextApiRequest, NextApiResponse } from 'next'
import products from '@/lib/server/services/products';
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' })

    const page = req.query.page;

    if (!page) return res.status(400).json({ message: 'Bad Request' })

    try {
        res.status(200).json(products.getProducts(+page))
    }
    catch (error: any) {
        if(error.message === 'Products not found') {
            return res.status(404).json({ message: error.message })
        }

        return res.status(500).json({ message: 'Internal Server Error' })
    }

}
