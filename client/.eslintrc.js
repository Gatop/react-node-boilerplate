module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
        },
    },
    "rules": {
        "space-in-parens": [ 0, "always" ],
        "template-curly-spacing": [ 2, "always" ],
        "array-bracket-spacing": [ 2, "always" ],
        "object-curly-spacing": [ 2, "always" ],
        "computed-property-spacing": [ 2, "always" ],
        "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
        "quotes": [ 1, "single", "avoid-escape" ],
        "no-use-before-define": [ 2, { "functions": false } ],
        "semi": ["error", "always", { "omitLastInOneLineBlock": true}],
        "prefer-const": 1,
        "react/prefer-es6-class": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-curly-spacing": [ 2, "always" ],
        "react/jsx-indent": [ 2, 2 ],
        "react/prop-types": [ 1 ],
        "react/no-array-index-key": [ 1 ],
        "class-methods-use-this": [ 0, { "exceptMethods": ["render"] } ],
        "no-undef": [ 1 ],
        "no-case-declarations": [ 1 ],
        "no-return-assign": [ 1 ],
        "no-param-reassign": [ 1 ],
        "no-shadow": [ 1 ],
        "camelcase": [ 1 ],
        "no-underscore-dangle" : [0, "always"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "indent": ["error", 2],
        "keyword-spacing": ["error", { "before": true }],
    }
};