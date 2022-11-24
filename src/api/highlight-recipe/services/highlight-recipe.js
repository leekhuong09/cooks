'use strict';

/**
 * highlight-recipe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::highlight-recipe.highlight-recipe');
