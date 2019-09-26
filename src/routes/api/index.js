import { Router } from 'express';
import YAML from 'yamljs';
import path from 'path';
import authRoute from './auth.route';
import jsonRoute from './jsonPatch.route';
import thumbnailRoute from './thumbnail.route';

const swaggerUi = require('swagger-ui-express');

const swaggerDocs = YAML.load(path.join(__dirname, '../../../swagger.yml'));

const routes = Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.use('/', authRoute);
routes.use('/', jsonRoute);
routes.use('/', thumbnailRoute);

export default routes;
