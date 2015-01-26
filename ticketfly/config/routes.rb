Rails.application.routes.draw do

  match 'auth/twitter/callback',  to: 'sessions#create'

end
