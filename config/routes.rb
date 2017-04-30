Rails.application.routes.draw do
  get '*path', to: 'application#index'
  get'/', to: 'application#index'
end
