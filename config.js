module.exports = {
	// theme machine name
	theme: '',
	// add additional required files to be copied to their respective destinations
	external: {
		src: [],
		dest: []
	},
	// configure sass source and destination directories 
	sass: {
		enable: true,
		src: 'sass/**/**.scss',
		dest: 'css/',
		// Values: nested, expanded, compact, compressed
		compilerOptions: {
			outputStyle: 'expanded'
		}
	},
	// Autoprefixer options
	// to learn more about autoprefixer and possible configuration options please visit: https://github.com/postcss/autoprefixer#options
	autoprefixer: {
       browsers: ['> 0%']
	},
	// Broswersync options
	// to learn more about Broswersync and possible configuration options please visit: https://www.browsersync.io/docs/options
	browserSync: {
		open: false,
		serveStatic: ['.'],
		port: 3000,
		proxy: {
			target: 'http://spinemed.hungary56.com/'
		}
	}
};
