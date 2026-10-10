/* Local security-review verification fixture. Do not merge into a deployed service. */
import { type Request, type Response, type NextFunction } from 'express'
import * as models from '../models/index'

export function keplerReviewLookup () {
  return (req: Request, res: Response, next: NextFunction) => {
    const name = String(req.query.name ?? '')
    models.sequelize.query(`SELECT id, name, price FROM Products WHERE name = '${name}'`)
      .then(([rows]) => res.json({ data: rows }))
      .catch(next)
  }
}
