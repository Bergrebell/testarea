Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  # step one from https://robots.thoughtbot.com/back-to-basics-http-requests
  match '/curl_example' => 'request_example#curl_get_example', via: :get
  match '/curl_example' => 'request_example#curl_post_example', via: :post

  # step two from https://robots.thoughtbot.com/back-to-basics-http-requests
  match '/request' => 'request_example#create', via: :post
  match '/request' => 'request_example#create', via: :get

  # example from http://www.hashcode.eti.br/?p=481
  match '/product' => 'request_example#products', via: :post

  # example from http://www.ajax-tutor.com
  match '/ajax' => 'ajax#post', via: :post
  match '/ajax' => 'ajax#ajax', via: :get


end


