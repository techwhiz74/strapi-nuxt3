'use strict';

/**
 * global-setting router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-setting.global-setting');
