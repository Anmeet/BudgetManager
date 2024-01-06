import cors from 'cors';
import config from '@config/config';

const corsOptions = {
  origin: config.ORIGIN,
  credentials: config.HAS_CREDENTIALS,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export default cors(corsOptions);
