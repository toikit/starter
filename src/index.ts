import { setConfig, setRoot, start } from '@toikit/toikit';
import dotenv from 'dotenv';
import config from './config';

dotenv.config();
setRoot(__dirname);
setConfig(config);
start();
