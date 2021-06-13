module.exports = {
    env: {
        browser: true,
        jest: true,
    },
    extends: ["plugin:react/recommended", "plugin:prettier/recommended", "eslint:recommended", "standard", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "sort-class-members"],
    rules: {
        "no-var": "error",
        "no-console": "error",
        "no-use-before-define": "off",
        "import/order": [
            "error",
            {
                groups: ["external", "builtin", "parent", "sibling", "index"],
                "newlines-between": "always",
            },
        ],
        "space-before-function-paren": 0,
        "space-in-parens": 0,
        "func-call-spacing": 0,
        "sort-class-members/sort-class-members": [
            2,
            {
                order: [
                    "[static-properties]",
                    "[static-methods]",
                    "[getters]",
                    "[conventional-private-properties]",
                    "constructor",
                    "[arrow-function-properties]",
                ],
            },
        ],
    },
    ignorePatterns: ["node_modules/", "react-rx-form-dist"],
};
