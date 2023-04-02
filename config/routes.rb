Rails.application.routes.draw do
  get 'contact/send_email'
  get 'messages/create'
  get 'pages/home'
  get 'pages/contact'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'pages#home'
  get 'contact', to: 'pages#contact'
  post 'contact/send_email', to: 'contact#send_email'
  get 'about', to: 'pages#about'
  get 'projects', to: 'pages#projects'
  resources :messages, only: [:create]
end
