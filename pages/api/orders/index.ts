import type { NextApiRequest, NextApiResponse } from 'next'
import orders from '@/lib/server/services/orders';

const acceptedMethods = ['GET', 'POST'];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(!req.method || !acceptedMethods.includes(req.method)) return res.status(405).json({ message: 'Method Not Allowed' })

    if(req.method === 'GET') {
        const userId = req.query.userId;

        if (!userId) return res.status(400).json({ message: 'Bad Request' })

        try {
            res.status(200).json(orders.getOrders(+userId))
        }
        catch (error: any) {
            if (error.message === 'Orders not found') {
                return res.status(404).json({ message: error.message })
            }

            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    if(req.method === 'POST') {
        const userId = req.body.userId;
        const items = req.body.items;

        if (!userId || !items) return res.status(400).json({ message: 'Bad Request' })

        try {
            orders.createOrder(+userId, items)
            res.status(200).json({ message: 'Order added.' })
        }
        catch (error: any) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

}
