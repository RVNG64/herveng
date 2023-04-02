class PagesController < ApplicationController
  def home
  end

  def contact
    @message = Message.new
  end

  def about
  end

  def projects
  end
end
