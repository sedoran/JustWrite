Rails.application.routes.draw do
  root 'main#index'
  # get 'projects/:project_id/pages' => 'pages#index'
  # post 'projects/:project_id/pages' => 'pages#create'
  put 'projects/:project_id/pages' => 'projects#update'
  
  resources :users, except: [:new, :edit, :show]
  resources :projects, except: [:new, :edit, :show] do 
    resources :pages, except: [:new, :edit, :show]
  end
end
