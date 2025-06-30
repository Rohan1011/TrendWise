import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Simulate comment creation for now
    const comment = {
      id: Date.now().toString(),
      content: req.body.content,
      author: req.body.author,
      date: new Date().toISOString()
    }
    res.status(201).json(comment)
  } else if (req.method === 'GET') {
    // Simulate fetching comments for now
    const comments = [
      { id: '1', content: 'Great article!', author: 'John Doe' },
      // Add more comments here
    ]
    res.status(200).json(comments)
  }
}