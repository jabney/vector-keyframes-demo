module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": [
            "off"
        ],
        "strict": [
            "error",
            "global"
        ],
        "no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "after-used"
            }
        ],
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "no-console": [
            "warn",
            {
                "allow": ["warn", "error"]
            }
        ]
    }
};