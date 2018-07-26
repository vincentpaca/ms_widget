class HomeController < ApplicationController
  def index
    @min_months = customization_params[:min_months]
    @max_months = customization_params[:max_months]
    @min_amount = customization_params[:min_amount]
    @max_amount = customization_params[:max_amount]
    @amount_placeholder = customization_params[:amount_placeholder]

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
    params.permit(:widget_type,
        :amount_placeholder,
        :min_months,
        :max_months,
        :min_amount,
        :max_amount
    )
  end
end
