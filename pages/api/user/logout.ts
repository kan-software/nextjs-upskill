import type { NextApiRequest, NextApiResponse } from 'next'
import user from '@/lib/server/services/user';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' })

    const userId = req.query.userId;

    if (!userId) return res.status(400).json({ message: 'Bad Request' })

    try {
        user.logUserOut(+userId);
        res.status(200).json({ message: 'User logged out' })
    } catch (error: any) {
        if(error.message === 'User is not logged in') {
            return res.status(401).json({ message: error.message })
        }

        return res.status(500).json({ message: 'Internal Server Error' })

    }
}
