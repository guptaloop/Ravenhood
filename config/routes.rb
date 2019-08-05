# For details on the DSL available within this file:
#   http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
 
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:new, :create, :destroy]
    resource :watchlist_item, only: [:create, :destroy]
    # resources :stocks, only: [:index]
    get '/stocks/:symbol', to: 'stocks#show'
  end

end