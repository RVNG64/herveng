class MailerRvngMailer < ApplicationMailer
  def contact_email(name, email, subject, content)
    @name = name
    @subject = subject
    @content = content
    mail(to: 'herve.nguetsop@gmail.com', from: email, subject: "Contact Form: #{@subject}")
  end
end
