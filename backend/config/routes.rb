Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]

      get    'me', to: 'users#show'
      delete 'me', to: 'users#destroy'

      resource :session, only: [:create, :destroy]

      resources :todos, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
