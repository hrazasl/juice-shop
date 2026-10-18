/* Local security-review verification fixture. Do not merge into a deployed service. */
import { type Request, type Response } from 'express'
import * as models from '../models/index'

export function keplerReviewLookup () {
  return (req: Request, res: Response) => {
    const name = String(req.query.name ?? '')
    models.sequelize.query('SELECT id, name, price FROM Products WHERE name = ?', {
      replacements: [name]
    })
      .then(([rows]) => res.json({ data: rows }))
      .catch((err: unknown) => {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
      })
  }
}
