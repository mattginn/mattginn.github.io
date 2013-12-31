namespace :sass do
  file = ENV['file'] || 'site'
  type = ENV['type'] || 'sass'

  str = "assets/css/sass/#{file}.#{type}:assets/css/#{file}.min.css --style compressed"

  task :watch => [:update] do
    system "sass --watch #{str}"
  end

  task :update do
    system "sass --update #{str}"
  end
end
