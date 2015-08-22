/**
 * Concats two values, primarily used as a subhelper
 * @example
 *  {{@lang (concat 'products.reviews.rating.' this) }}
 */
module.exports = function (paper) {
    paper.handlebars.registerHelper('concat', function (value, otherValue) {
        return new paper.handlebars.SafeString(value + otherValue);
    });
};