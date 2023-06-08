import type { NextApiRequest, NextApiResponse } from 'next'
import cart from '@/lib/server/services/cart';

const acceptedMethods = ['GET', 'POST', 'DELETE'];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(!req.method || !acceptedMethods.includes(req.method)) return res.status(405).json({ message: 'Method Not Allowed' })

    if(req.method === 'GET') {
        const userId = req.query.userId;

        if (!userId) return res.status(400).json({ message: 'Bad Request' })

        try {
            res.status(200).json(cart.getCart(+userId))
        } catch (error: any) {
            if(error.message === 'Cart not found') {
                return res.status(404).json({ message: error.message })
            }

            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    if(req.method === 'POST') {
        const userId = req.body.userId;
        const cartItems = req.body.cart

        if (!userId || !cartItems) return res.status(400).json({ message: 'Bad Request' })

        try {
            cart.updateCart(+userId, cartItems);
            res.status(200).json({ message: 'Cart updated' })
        } catch (error: any) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    if(req.method === 'DELETE') {
        const userId = req.query.userId;

        if (!userId) return res.status(400).json({ message: 'Bad Request' })

        try {
            cart.clearCart(+userId)
            res.status(200).json({ message: 'Cart cleared' })
        } catch (error: any) {
            if(error.message === 'Cart not found') {
                return res.status(404).json({ message: error.message })
            }

            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

}
