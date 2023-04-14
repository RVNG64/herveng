class PagesController < ApplicationController
  def home
    @posts = Post.all.limit(3)
  end

  def contact
    @message = Message.new
  end

  def about
  end

  def projects
  end
end
