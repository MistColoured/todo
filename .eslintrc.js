// React config 17 Jun 2018
// 21 Jun:
// Added Airbnb guide and removed Prettier and some duplicate rules

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb"
        // "prettier",
        // "prettier/react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 9,
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
      // React rules:
  
      // Prevent multiple component definitions per file
      "react/no-multi-comp": [
          "enabled", { "ignoreStateless": true }
      ],
      // Enforce ES6 class for React Components
      "react/prefer-es6-class": [
          "enabled"
      ],
      // Enforce stateless React Components to be written as a pure function
      "react/prefer-stateless-function": [
          "enabled"
      ],
      // Enforce PascalCase for user-defined JSX components 
      "react/jsx-pascal-case": [
          "enabled"
      ],
      // Validate closing bracket location in JSX
      "react/jsx-closing-bracket-location": [
          "enabled"
      ],
      // Validate closing tag location in JSX
      "react/jsx-closing-tag-location": [
          "enabled"
      ],
      // Enforce the consistent use of either double quotes in JSX attributes
      "jsx-quotes": [
          "error", "prefer-double"
      ],
      // Validate whitespace in and around the JSX opening and closing brackets
      "react/jsx-tag-spacing": [
          "enabled"
      ],
      // Disallow spaces inside of curly braces in JSX attributes and expressions
      "react/jsx-curly-spacing": [
          "enabled",
          { when: "always", attributes: false, children: true }
      ],
      // Enforce boolean attributes notation in JSX
      "react/jsx-boolean-value": [
          "enabled"
      ],
      // Prevent using string references
      "react/no-string-refs": [
          "enabled"
      ],
      // Prevent missing parentheses around multiline JSX
      "react/jsx-wrap-multilines": [
          "enabled", {
              "declaration": "parens",
              "assignment": "parens",
              "return": "parens",
              "arrow": "parens",
              "condition": "ignore",
              "logical": "ignore",
              "prop": "ignore"
          }
      ],
      // Prevent extra closing tags for components without children 
      "react/self-closing-comp": [
          "enabled", {
          "component": true,
          "html": true
        }
      ],
      // No .bind() or Arrow Functions in JSX Props
      "react/jsx-no-bind": [
          "enabled"
      ],
      // Enforce ES6 class for returning value in render function 
      "react/require-render-return": [
          "enabled"
      ],
      // Enforce component methods order
      "react/sort-comp": [
          "enabled"
      ],
      // Prevent usage of isMounted
      "react/no-is-mounted": [
          "enabled"
      ],
      // Disallow multiple spaces
      "no-multi-spaces": [
          "error"
      ],
    // Included in Airbnb
    //   "arrow-body-style": [
    //     "error",
    //     "as-needed"
    //   ],
    //   "indent": [
    //     "error",
    //     2
    //   ],
    // Enforce consistent linebreak style
      "linebreak-style": [
        "error",
        "unix"
      ],
    //   Included in Airbnb
    //   "quotes": [
    //     "error",
    //     "single"
    //   ],
    //   "semi": [
    //     "error",
    //     "always"
    //   ],
    //   "no-var": "error",
    //     "prefer-const": [
    //       "error", {
    //         "destructuring": "any",
    //         "ignoreReadBeforeAssign": false
    //       }
    //     ],
      "no-console": 0,
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
      //   "prettier/prettier": [
      //       "error",
      //       {
      //           "trailingComma": "es5",
      //           "singleQuote": true,
              //   "printWidth": 120,
      //       }
      //   ]
    },
    "plugins": [
      "react"
    //     // "html",
    //     "prettier"
    ]
  };