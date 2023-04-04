class ContactMailer < ApplicationMailer
  def send_contact_email(name, email, subject, content)
    @name = name
    @email = email
    @subject = subject
    @content = content

    mail(to: 'herve.nguetsop@gmail.com', subject: "New Contact Message - #{@subject}")
  end
end
