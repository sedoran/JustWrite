Rails.application.routes.draw do
  root 'main#index'
  resources :users, except: [:new, :edit]
  resources :projects, except: [:new, :edit]
  resources :pages, except: [:new, :edit]
end
