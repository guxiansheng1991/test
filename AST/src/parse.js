const recast = require('recast');

const code = `
    function add(a, b) {
        return a + 
        // 奇怪的东西
        b;
    }
`;

// 将上面代码转为ast
const ast = recast.parse(code);

// 打印add
const add = ast.program.body[0];

// 把之前的function add(a, b){...}声明，改成匿名函数式声明const add = function(a ,b){...}
const n = recast.types.namedTypes;
n.FunctionDeclaration.assert(add);
const { variableDeclaration, variableDeclarator, functionExpression } = recast.types.builders;

ast.program.body[0] = variableDeclaration('const', [
    variableDeclarator(add.id, functionExpression(
        null,
        add.params,
        add.body
    ))
])

const output = recast.print(ast).code;

console.log(output);
