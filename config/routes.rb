Rails.application.routes.draw do
  root 'main#index'
  get 'projects/:project_id/pages' => 'pages#index'
  post 'projects/:project_id/pages' => 'pages#create'
  
  resources :users, except: [:new, :edit]
  resources :projects, except: [:new, :edit]
  resources :pages, except: [:new, :edit]
end
