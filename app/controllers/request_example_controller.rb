class RequestExampleController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_filter  :verify_authenticity_token

  def curl_get_example
    render text: "Thanks for sending a GET request with cURL!"
  end

  def curl_post_example
    render text: "Thanks for sending a POST request with cURL! Payload: #{request.body.read}"
  end

  def create
    render json: params
  end

  def products
    render json: params
  end

end
