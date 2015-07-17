# require
gulp          = require 'gulp'
gutil         = require 'gulp-util'
jade          = require 'gulp-jade'
less          = require 'gulp-less'
autoprefixer  = require 'gulp-autoprefixer'
minifycss     = require 'gulp-minify-css'
coffee        = require 'gulp-coffee'
uglify        = require 'gulp-uglify'
imagemin      = require 'gulp-imagemin'
rename        = require 'gulp-rename'
concat        = require 'gulp-concat'
cache         = require 'gulp-cache'
notify        = require 'gulp-notify'
livereload    = require 'gulp-livereload'
del           = require 'del'

# path
jadePath    = './src'
lessPath    = './src/style'
coffeePath  = './src/script'
imagePath   = './src/image'
assetsPath  = './src/assets'
distPath    = './dist'

# jade task
gulp.task 'jade', ->
	gulp.src jadePath + '/**/*.jade'
		.pipe jade { pretty: true }
		.on   'error', gutil.log
		.pipe gulp.dest distPath
		.pipe notify { message: 'Jade build complete' }
		.pipe livereload()

# less task
gulp.task 'less', ->
  gulp.src lessPath + '/main.less'
    .pipe less()
		.on   'error', gutil.log
		.pipe autoprefixer 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
    .pipe gulp.dest distPath + '/assets/style/'
    .pipe notify { message: 'Less build complete' }
    .pipe livereload()

# coffee task
gulp.task 'coffee', ->
	gulp.src coffeePath + '/**/*.coffee'
		.pipe coffee { bare: true }
		.on   'error', gutil.log
		.pipe gulp.dest distPath + '/assets/script/'
		.pipe notify { message: 'Coffee build complete' }
		.pipe livereload()

# image task
# image
gulp.task 'image', ->
  gulp.src imagePath + '/**/*'
    .pipe cache imagemin { optimizationLevel: 3, progressive: true, interlaced: true }
    .pipe gulp.dest distPath + '/assets/image/'
    .pipe notify { message: 'Images task complete' }
		.pipe livereload()

# copy other assets
gulp.task 'assets', ->
  gulp.src assetsPath + '/**/*'
    .pipe gulp.dest distPath + '/assets/'
    .pipe livereload()

# clean
gulp.task 'clean', (cb)->
  del [distPath], cb
	cache.clearAll()

# default
gulp.task 'default', ['clean'], ->
  gulp.start 'jade', 'less', 'coffee', 'image', 'assets'

# watch
gulp.task 'watch', ->
  gulp.watch jadePath   + '/**/*.jade', ['jade']
  gulp.watch lessPath   + '/**/*.less', ['less']
  gulp.watch coffeePath + '/**/*.coffee', ['coffee']
  gulp.watch [imagePath  + '/**/*.png', imagePath  + '/**/*.jpg', imagePath  + '/**/*.gif'], ['image']
  gulp.watch assetsPath + '/**/*', ['assets']
  livereload.listen()
