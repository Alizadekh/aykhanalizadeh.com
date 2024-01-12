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
    smtp_username = "aykhanalizadekh@gmail.com"  # E-poçt adresi
    smtp_password = "Ayxan20049115"  # E-poçt hesabının şifresi
    

    email_body = f"Name: {name}\nSurname: {surname}\nSubject: {subject}\nMessage: {message}"
    
    try:
        
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        
      
        server.sendmail(smtp_username, smtp_username, email_body)
        server.quit()
        
        return "E-poçt göndərildi!."
    except:
        return "E-poçt göndərilmədi. Təkrar yoxlayın."
    
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
