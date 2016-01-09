require_relative './test'

class Cli < Thor
  desc 'server', 'run a development server'
  def server
    system 'node server.js'
  end

  desc 'watch', 'run a development server'
  def watch
    system './node_modules/gulp/bin/gulp.js sass:watch'
  end

  desc "test", "run tests"
  subcommand "test", Test
end

