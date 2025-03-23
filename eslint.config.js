import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname, // Required for compatibility with @eslint/eslintrc
});

const eslintConfig = [
  {
    ignores: ["node_modules", "package-lock.json"],
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        rules: {
          "@typescript-eslint/no-unused-vars": "warn",
          "simple-import-sort/imports": [
            "error",
            {
              groups: [
                // Packages `react` related packages come first.
                ["^react", "^@?\\w"],
                // Internal packages
                ["^(@|page-components)(/.*|$)"],
                // Side effect imports
                ["^\\u0000"],
                // Parent imports. Put `..` last.
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                // Other relative imports. Put same-folder imports and `.` last.
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                // Style imports
                ["^.+\\.?(css)$"],
              ],
            },
          ],
          "sort-keys-fix/sort-keys-fix": "warn",
        },
      },
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["simple-import-sort", "sort-keys-fix", "@typescript-eslint"],
    root: true,
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "sort-keys": [
        "error",
        "asc",
        { caseSensitive: true, minKeys: 2, natural: false },
      ],
    },
  }),
];

export default eslintConfig;
