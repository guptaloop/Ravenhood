# For details on the DSL available within this file:
#   http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
 
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:new, :create, :destroy]
    resources :stocks, only: [:index, :show]
    resources :stock_watches, only: [:create, :destroy]
    get 'stock_watches/:user_id', to: 'stock_watches#list'
    resources :holdings, only: [:create, ]
  end
end