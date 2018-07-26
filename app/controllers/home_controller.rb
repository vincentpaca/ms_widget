class HomeController < ApplicationController
  def index
    case customization_params[:widget_type]
    when 'travel'
      @title = 'Travel Goals'
      render :travel
    when 'housing_loan'
      @title = 'New Home'
      render :home
    else
      # raise an exception here
    end
  end

  private

  def customization_params
    params.permit(:widget_type)
  end
end
