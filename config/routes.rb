Rails.application.routes.draw do
  devise_for :users
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
