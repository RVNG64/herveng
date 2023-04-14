class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post, notice: 'Article créé avec succès'
    else
      render :new, status: :unprocessable_entity, notice: 'Erreur lors de la création de l\'article'
    end
  end

  def edit
  end

  def update
    if @post.update(post_params)
      redirect_to @post, notice: 'Article modifié avec succès'
    else
      render :edit, status: :unprocessable_entity, notice: 'Erreur lors de la modification de l\'article'
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_url, notice: 'Article supprimé avec succès'
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
