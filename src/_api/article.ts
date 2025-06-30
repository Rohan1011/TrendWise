import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Simulate fetching articles for now
    const articles = [
      {
        _id: '1',
        title: 'Getting Started with ChatGPT Integration',
        slug: 'chatgpt-integration',
        excerpt: 'Learn how to integrate ChatGPT into your web application...',
        date: '2024-03-20'
      },
      // Add more articles here
    ]
    res.status(200).json(articles)
  } else if (req.method === 'POST') {
    // Handle article creation logic
    res.status(201).json({ message: 'Article created successfully' })
  }
}