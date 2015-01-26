OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, "fqvCypetw2ZgbUFCaaGUw6qlt", "gPJjbjPNeSTJys7GtC0d24RnjDn2sQZSIRr49Hzkk1KeRRMM5V", 
  {
  	:secure_image_url => "true",
  	:image_size => "normal",
  	:authorize_params => {
  		:force_login => "true"
  	}
  }
end