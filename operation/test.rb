class Test < Thor
  default_task :browser

  desc 'browser', 'run tests in the browser'
  def browser
    system './node_modules/gulp/bin/gulp.js jasmine'
  end

  desc 'headless', 'run tests headlessly'
  def headless
    system './node_modules/gulp/bin/gulp.js jasmine-headless'
  end
end