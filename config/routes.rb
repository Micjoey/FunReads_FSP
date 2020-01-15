Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:index]
    resources :books, only: [:show] do
      resources :review
    end
    resources :shelves
  end
  root "static_pages#root"
end
