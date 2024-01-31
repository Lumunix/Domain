Gem::Specification.new do |spec|
  spec.name                    = "domain-jekyll"
  spec.version                 = "1.4.0"
  spec.authors                 = ["Lumunix"]
  spec.email                   = ["lumunix@icloud.com"]
  spec.summary                 = %q{Jekyll theme for building a personal knowledge repository and blog.}
  spec.homepage                = "https://github.com/Lumunix/Domain"
  spec.license                 = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files                   = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(data|includes|layouts|sass)/|(LICENSE|README|CHANGELOG)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "webrick", "~> 1.7"
  spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.1"
  spec.add_runtime_dependency "jekyll", "~> 3.9.2"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"

  spec.add_development_dependency "bundler", "~> 2.3.25"
  spec.add_development_dependency "rake", "~> 12.3.3"
end
