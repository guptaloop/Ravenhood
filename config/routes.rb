# For details on the DSL available within this file:
#   http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
 
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    ## refactor how state stores gold (remove :show from resources :users)
    resources :users, only: [:create, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :stocks, only: [:index, :show]
    resources :stock_watches, only: [:create, :destroy]
    get 'stock_watches/:user_id', to: 'stock_watches#list'
    resources :holdings, only: [:create, :update, :destroy]
    get 'holdings/:user_id', to: 'holdings#list'
    # use PATCH for #update >> PUT requires all fields to be passed down
  end
end