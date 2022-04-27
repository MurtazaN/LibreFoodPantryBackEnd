const path = require('path');
const yaml = require('js-yaml');
const { readFileSync } = require('fs');

const ROOT_DIR = path.join(__dirname, "..", "..");

const config = {
  //MONGO_URI: process.env.MONGO_URI,
  SERVER_PORT: process.env.SERVER_PORT ? process.env.SERVER_PORT : 10001,

  ROOT_DIR: ROOT_DIR,
  OPENAPI_FILE: path.join(ROOT_DIR, "lib", "foodkeeper-api-0.1.0.yaml"),
  ENDPOINTS_DIR: path.join(ROOT_DIR, "src", "endpoints"),
  OPENAPI_SCHEMA: path.join(ROOT_DIR, 'lib', 'openapi.yaml'),
};

/**
 * Load API version directly from openapi.yaml
 * @type {any} apiSchema
 */
 const apiSchema = yaml.load(readFileSync(config.OPENAPI_SCHEMA, 'utf8'));
 config.API_VERSION = apiSchema.info.version;

module.exports = config;
