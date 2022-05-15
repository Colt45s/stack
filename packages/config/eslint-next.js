module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
  },
};
