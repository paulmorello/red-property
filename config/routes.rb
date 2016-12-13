Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'listings#index'

  get '/flatmates', to: 'listings#flatmates'

  resources :listings

end
