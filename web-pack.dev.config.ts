import type { Configuration as WebpackConfig } from 'webpack';
import type { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';
// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin";
// @ts-ignore
import path from "path";
import { fileURLToPath } from "url";
// @ts-ignore
import webpack from "webpack";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { HotModuleReplacementPlugin } = webpack;
type  Configuration = WebpackConfig & {
    devServer?: WebpackDevServerConfig;
}

const config: Configuration = {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    }
                },
            },
            {
                test: /\.css$/i,  // Add this rule for CSS
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        port: 4000,
        open: true,
        historyApiFallback: true,
        static: path.join(__dirname, 'dist'),
    }
}
export default config;