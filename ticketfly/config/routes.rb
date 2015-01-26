Rails.application.routes.draw do

  root 'users#index'

  resources :users do 
    resources :comments
    resources :votes
  end

  resources :venues do
    resources :comments
    resources :votes
  end

  get 'auth/twitter/callback',  to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout',  to: 'sessions#destroy', as: 'signout'

end
