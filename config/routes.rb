Rails.application.routes.draw do
  root 'main#index'
  # get 'projects/:project_id/pages' => 'pages#index'
  # post 'projects/:project_id/pages' => 'pages#create'
  # put 'projects/:project_id/pages/:id' => 'pages#update'
  
  resources :users, except: [:new, :edit]
  resources :projects, except: [:new, :edit] do 
    resources :pages, except: [:new, :edit]
  end
end
