module.exports = function () {
    
    return {
      files: [
          'helpers/**/*.js',
          'libs/**/*.js',
          'middlewares/**/*.js',
          'modules/**/*.js',
          'routes/**/*.js',
          {pattern: '**/*spec.js', ignore: true},
        'app.js'
      ],
  
      tests: [
        {pattern: '**/*spec.js'},
        {pattern: 'node_modules/**/*.js', ignore: true},
      ],

      testFramework: 'mocha',
      debug: true,
  
      env: {
        type: 'node'
      }
    };
  };
