Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'listings#index'

  get '/session/new', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

  get '/sharehouses', to: 'listings#sharehouses'
  get '/longterm', to: 'listings#longterm'

  resources :listings, :users

end
