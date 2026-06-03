import { build, setConfig, setRoot } from '@toikit/core';
import dotenv from 'dotenv';
import config from './config';

dotenv.config();
setRoot(__dirname);
setConfig(config);
build();
