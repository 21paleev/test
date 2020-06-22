"use strict";

const gulp = require("gulp");
const browsersync = require("browser-sync");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const webpack = require("webpack-stream");
const src = "./src/";
const dist = "./dist/";
//const dist = "../../../WEB/OSPanel/domains/window/";

gulp.task("html", () => {
	return gulp
		.src(src + "*.html") // Берем источник
		.pipe(gulp.dest(dist)) // Выгружаем в папку dist/assets/css

		.pipe(browsersync.stream());
});

gulp.task("styles", () => {
	return gulp
		.src(src + "sass/**/*.+(scss|sass)")
		.pipe(
			sass({
				outputStyle: "compressed",
			}).on("error", sass.logError)
		)
		.pipe(
			rename({
				suffix: ".min",
				prefix: "",
			})
		)
		.pipe(autoprefixer())
		.pipe(
			cleanCSS({
				compatibility: "ie8",
			})
		)
		.pipe(gulp.dest(dist + "css"))
		.pipe(browsersync.stream());
});

gulp.task('images', () => {
	return gulp.src(src + "img/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest(dist + "img"));
});

gulp.task("js", () => {
	return gulp.src(src + "js/main.js")
		.pipe(webpack({
			mode: 'development',
			output: {
				filename: 'script.js'
			},
			watch: false,
			devtool: "source-map",
			module: {
				rules: [{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									debug: true,
									corejs: 3,
									useBuiltIns: "usage"
								}]
							]
						}
					}
				}]
			}
		}))
		.pipe(gulp.dest(dist))
		.on("end", browsersync.reload);
});

gulp.task("watch", () => {
	browsersync.init({
		server: dist,
		port: 4000,
		notify: false,
	});
	gulp.watch(src + "*.html", gulp.parallel("html"));
	gulp.watch(src + "css/**/*.css", gulp.parallel("styles"));
	gulp.watch(src + "js/**/*.js", gulp.parallel("js"));
});

gulp.task("prod-js", () => {
	return gulp.src("./src/js/main.js")
		.pipe(webpack({
			mode: 'production',
			output: {
				filename: 'script.js'
			},
			module: {
				rules: [{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									corejs: 3,
									useBuiltIns: "usage"
								}]
							]
						}
					}
				}]
			}
		}))
		.pipe(gulp.dest(dist));
});

gulp.task("build", gulp.parallel("html", "styles", "images", "js"));

gulp.task("default", gulp.parallel("watch", "build"));
