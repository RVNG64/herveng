class ApplicationController < ActionController::Base

  private

  def authenticate_admin!
    unless user_signed_in? && current_user.admin?
      flash[:alert] = "Vous devez être administrateur pour accéder à cette page."
      redirect_to root_path
    end
  end
end
