class AjaxController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_filter  :verify_authenticity_token

  def ajax

  end

  def post
    render json: params
  end



end
