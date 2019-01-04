# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = 'soon.motorious.com'
  s3_sync.region                     = 'us-east-1'
  s3_sync.aws_access_key_id          = ENV['SPEED_DIGITAL_AWS_ACCESS_KEY_ID']
  s3_sync.aws_secret_access_key      = ENV['SPEED_DIGITAL_AWS_SECRET_ACCESS_KEY']
  s3_sync.delete                     = false # do not delete stray files
  s3_sync.after_build                = false # do not chain after the build step
  s3_sync.prefer_gzip                = true
  s3_sync.path_style                 = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl                        = 'public-read'
  s3_sync.encryption                 = false
  s3_sync.prefix                     = ''
  s3_sync.version_bucket             = false
end

default_caching_policy max_age: (60 * 60 * 24 * 365), public: true
