Rails.application.routes.draw do
  devise_for :users, path: '', path_names: {
    sign_in: 'rvngmake_sign_in',
    sign_up: 'rvngmake_sign_up',
    sign_out: 'secret_sign_out',
    password: 'secret_password',
    confirmation: 'secret_confirmation',
    unlock: 'secret_unlock',
    registration: 'secret_registration'
  }
  resources :posts, except: [:index], path: 'blog', param: :slug
  get 'pages/home'
  get 'pages/contact'
  root 'pages#home'
  get 'contact', to: 'pages#contact'
  post 'contact', to: 'messages#create'
  get 'about', to: 'pages#about'
  get 'projects', to: 'pages#projects'
  get 'blog', to: 'posts#index'
  resources :messages, only: [:create], param: :slug
end
