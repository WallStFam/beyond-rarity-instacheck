import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default [
	{
		// application entry point
		input: "./src/index.js",

		// export to CJS and ESM modules
		output: [
			{
				file: "dist/index.js",
				format: "cjs",
				exports: "auto",
			},
			{
				file: "dist/index.es.js",
				format: "es",
				exports: "auto",
			},
		],

		plugins: [
			postcss({
				modules: {
					generateScopedName: "__BR_checker_[local]_[hash:base64:5]",
				},
				plugins: [],
				minimize: true,
			}),
			babel({
				exclude: "node_modules/**",
				presets: ["@babel/preset-react"],
			}),
			resolve(),
			terser(),
		],
		external: ["react", "react-dom", "prop-types"],
	},
];
