import type { NextApiRequest, NextApiResponse } from 'next'
import faq from '@/lib/server/services/faq';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' })

    try {
        res.status(200).json(faq.getFaqList())
    }
    catch (error: any) {
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}
