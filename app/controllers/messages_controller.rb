class MessagesController < ApplicationController
  def create
    @message = Message.new(params.permit(:name, :email, :subject, :content))

    name = params[:name]
    email = params[:email]
    subject = params[:subject]
    message = params[:content]

    ContactMailer.send_contact_email(name, email, subject, message).deliver

    if @message.save
      flash[:success] = "Votre message a été envoyé avec succès."
      redirect_to root_path
    else
      flash[:error] = "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer."
      render 'pages/contact'
    end
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :subject, :content)
  end
end
