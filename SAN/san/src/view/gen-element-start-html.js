/**
 * @file 生成元素标签起始的html
 * @author errorrik(errorrik@gmail.com)
 */

var evalExpr = require('../runtime/eval-expr');
var pushStrBuffer = require('../runtime/push-str-buffer');
var isComponent = require('./is-component');
var getPropHandler = require('./get-prop-handler');
var nodeEvalExpr = require('./node-eval-expr');

/**
 * 生成元素标签起始的html
 *
 * @param {Element} element 元素
 * @param {Object} buf html串存储对象
 */
function genElementStartHTML(element, buf) {
    if (!element.tagName) {
        return;
    }

    pushStrBuffer(buf, '<' + element.tagName + ' id="' + element.id + '"');

    element.props.each(function (prop) {
        var attr = prop.attr;

        if (!attr) {
            element.dynamicProps.push(prop);

            var value = isComponent(element)
                ? evalExpr(prop.expr, element.data, element)
                : nodeEvalExpr(element, prop.expr, 1);

            attr = getPropHandler(element, prop.name).attr(element, prop.name, value);
        }

        pushStrBuffer(buf, attr || '');
    });

    pushStrBuffer(buf, '>');
}

exports = module.exports = genElementStartHTML;
