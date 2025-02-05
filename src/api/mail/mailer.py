from flask_mail import Message
from api.mail.mail_config import mail
from flask import jsonify
import os
def send_email(address, password):
    try:
        msg = Message("Reset your password",  # Asunto del correo
                      recipients=[address])  # Correo del destinatario
        msg.html = f'''<p>Tu contraseña nueva es: {password} . Recuerda cambiarla cuando inicies sesión</p>'''
        # Enviar el correo
        mail.send(msg)
        return {'success': True, 'msg': 'correo enviado exitosamente'}
    except Exception as e:
        return {'success': False, 'msg': 'error al enviar correo' + str(e)}