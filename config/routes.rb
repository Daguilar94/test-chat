Rails.application.routes.draw do
  resources :rooms, only: [:index] do
    resources :messages, only: [:index, :create]
    resources :users, only: [:index, :destroy]
  end
  resources :users, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
