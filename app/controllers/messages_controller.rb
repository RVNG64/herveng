class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      name = @message.name
      email = @message.email
      subject = @message.subject
      content = @message.content

      MailerRvngMailer.contact_email(name, email, subject, content).deliver_now

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
