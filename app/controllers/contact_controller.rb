require 'mail'
require 'sendgrid-ruby'

class ContactController < ApplicationController
  include SendGrid

  def send_email
    name = params[:name]
    email = params[:email]
    subject = params[:subject]
    message = params[:message]

    from = Email.new(email: email)
    to = Email.new(email: 'herve.nguetsop@gmail.com')
    content = Content.new(type: 'text/plain', value: "Nom: #{name}\nEmail: #{email}\nMessage: #{message}")
    mail = Mail.new(from, subject, to, content)

    sg = SendGrid::API.new(api_key: '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')

    begin
      response = sg.client.mail._('send').post(request_body: mail.to_json)
      flash[:notice] = "Email envoyé avec succès" if response.status_code == '202'
    rescue => e
      flash[:alert] = "Une erreur s'est produite lors de l'envoi de l'email: #{e.message}"
    end

    redirect_to request.referrer || root_path
  end
end
