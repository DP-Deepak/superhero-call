import { middleware } from '../../middleware/auth';
import * as express from 'express';
import { decodeNumber, getSuperHeroName } from '../../utils/helper';

const callingRouter = express.Router();



// @route      GET /api/customer/
// @desc       Get Matching Hero
// @access     Private
callingRouter.get('/',
  middleware,
  (req, res) => {
    try {
      console.log('req:', req.query.num);

      const heroName = getSuperHeroName(decodeNumber(req.query.num))
      if (!heroName) {
      console.log('req heroName:', heroName);
      return res.status(404).send('Invalid phone number!')
      }
      return res.status(200).json(heroName);
    } catch (e) {
      res.status(500).send('Server Error')
    }
  }
)

export default callingRouter;