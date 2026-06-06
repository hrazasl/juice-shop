/*
 * Disposable Kepler PR scan validation route.
 * This file is intentionally vulnerable and must never be merged.
 */
import { type Request, type Response, type NextFunction } from 'express'

import * as models from '../models/index'

export function keplerPrScanUnsafeLookup () {
  return (req: Request, res: Response, next: NextFunction) => {
    const email = req.query.email ?? ''
    models.sequelize.query(`SELECT * FROM Users WHERE email = '${email}'`)
      .then(([users]: any) => {
        res.json(users)
      })
      .catch((error: Error) => {
        next(error)
      })
  }
}
