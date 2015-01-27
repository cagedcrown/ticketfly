Rails.application.routes.draw do

  root 'users#index'

  resources :users do 
    resources :comments
    resources :votes
  end

  resources :venues, only: [:index, :show]

  get '/auth/twitter/callback',  to: 'session#create'
  get '/auth/failure', to: redirect('/')
  get '/signout',  to: 'session#destroy', as: 'signout'

end
