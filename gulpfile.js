import gulp from 'gulp'
// import imagemin from 'gulp-imagemin'
// import concat from 'gulp-concat'
// import sourcemaps from 'gulp-sourcemaps'
// import dartsass from 'gulp-dart-sass'
// import pug from 'gulp-pug'
// import webpack from 'webpack-stream'
import exec from 'gulp-exec'

// const jsPath = 'src/assets/js/app.js'
// const cssPath = 'src/assets/css/**/*.scss'
// const pugPath = 'src/**/*.pug'

// export const renderViews = () => {
// 	return gulp
// 		.src('src/*.pug')
// 		.pipe(pug({ options: false }))
// 		.pipe(gulp.dest('dist'))
// }
// export const imgTask = () => {
// 	return gulp
// 		.src('src/assets/img/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dist/assets/img'))
// }

export const pugTask = () => {
	const options = {
		continueOnError: false, // default = false, true means don't emit error event
		pipeStdout: false, // default = false, true means stdout is written to file.contents
	}
	const reportOptions = {
		err: true, // default = true, false means don't write err
		stderr: true, // default = true, false means don't write stderr
		stdout: true, // default = true, false means don't write stdout
	}
	return gulp.src('./**/**').pipe(exec(() => `pug src --out ./build --watch -P`, options))
}
export const sassTask = () => {
	const options = {
		continueOnError: false, // default = false, true means don't emit error event
		pipeStdout: false, // default = false, true means stdout is written to file.contents
	}
	const reportOptions = {
		err: true, // default = true, false means don't write err
		stderr: true, // default = true, false means don't write stderr
		stdout: true, // default = true, false means don't write stdout
	}
	return gulp.src('./**/**').pipe(exec(() => `sass build/assets/css/style.sass build/assets/css/style.css --watch`, options))
}

// export const jsTask = () => {
// 	return gulp
// 		.src(jsPath)
// 		.pipe(sourcemaps.init())
// 		.pipe(
// 			webpack({
// 				output: {
// 					filename: 'bundle.min.js',
// 					// clean: true,
// 				},
// 				mode: 'production',
// 			})
// 		)
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(gulp.dest('dist/assets/js'))
// }
// export const cssTask = () => {
// 	return gulp
// 		.src(cssPath)
// 		.pipe(sourcemaps.init())
// 		.pipe(concat('style.css'))
// 		.pipe(
// 			dartsass({ outputStyle: 'compressed' }).on(
// 				'error',
// 				dartsass.logError
// 			)
// 		)
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(gulp.dest('dist/assets/css'))
// }

// export const watchTask = () => {
// 	gulp.watch(
// 		[pugPath, cssPath, 'src/assets/css/**/*.sass', 'src/assets/js/**/*.js'],
// 		{ interval: 1000 },
// 		gulp.parallel(renderViews, cssTask, jsTask)
// 	)
// }
// export default gulp.series(
// 	gulp.parallel(renderViews, imgTask, jsTask, cssTask),
// 	watchTask
// )
export default gulp.series(
	gulp.parallel(pugTask, sassTask)
)
