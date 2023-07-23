module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-strongly-recommended",
        "@vue/eslint-config-prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        semi: ["error", "never"],
        quotes: ["error", "single"],
        indent: ["error", 4],
        "comma-spacing": ["error", { "before": false, "after": true }],
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': [
            'error',
            {
                semi: false,
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
        'no-undef': 'off',

    }
}
