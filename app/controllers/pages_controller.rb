class PagesController < ApplicationController
  def home
    @latest_posts = Post.order(created_at: :desc).limit(3)
  end

  def contact
    @message = Message.new
  end

  def about
  end

  def projects
  end
end
