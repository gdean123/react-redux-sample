require_relative './test'

class Cli < Thor
  desc 'server', 'run a development server'
  def server
    system './node_modules/gulp/bin/gulp.js sass'
    system 'node server.js'
  end

  desc 'watch', 'watch for changes in assets'
  def watch
    system './node_modules/gulp/bin/gulp.js sass:watch'
  end

  desc 'dev', 'watch and server'
  def dev
      system './node_modules/gulp/bin/gulp.js sass'
      system './node_modules/gulp/bin/gulp.js sass:watch & node server.js'
  end

  desc "test", "run tests"
  subcommand "test", Test
end

