Rails.application.routes.draw do
  devise_for :users
  resources :posts
  get 'pages/home'
  get 'pages/contact'
  root 'pages#home'
  get 'contact', to: 'pages#contact'
  post 'contact', to: 'messages#create'
  get 'about', to: 'pages#about'
  get 'projects', to: 'pages#projects'
  resources :messages, only: [:create]
end
