from flask import Flask, render_template, request
import smtplib

app = Flask(__name__)

@app.route('/contact', methods=['POST'])
def send_email():
    name = request.form['name']
    surname = request.form['surname']
    subject = request.form['subject']
    message = request.form['message']
    
    smtp_server = "aykhanalizadekh@gmail.com"
    smtp_port = 587
    smtp_username = "example@gmail.com"  # E-poçt adresi
    smtp_password = "password"  # E-poçt hesabının şifresi
    
    # E-poçt məzmunu
    email_body = f"Name: {name}\nSurname: {surname}\nSubject: {subject}\nMessage: {message}"
    
    try:
        # SMTP serverə bağlan
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        
        # E-poçt göndər
        server.sendmail(smtp_username, smtp_username, email_body)
        server.quit()
        
        return "E-poçt göndərildi!."
    except:
        return "E-poçt göndərilməd. Təkrar yoxlayın."
    
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
