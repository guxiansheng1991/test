const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

const code = 'function ast(){}';

// 通过esprima将代码解析为ast
const ast = esprima.parseScript(code);

// 通过estraverse遍历并更新AST


estraverse.traverse(ast, {
    enter(node) {
        console.log('enter', node.type);
        if (node.type === 'Identifier') {
            node.name += 'enter';
        }
    },
    leave(node) {
        console.log(node);
        if (node.type === 'Identifier') {
            node.name += 'leave';
        }
    }
});

const code2 = escodegen.generate(ast);

console.log(code2);