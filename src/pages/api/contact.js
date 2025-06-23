export const prerender = false;
import 'dotenv/config';
import nodemailer from 'nodemailer';

export async function POST({ request }) {
  try {
    // Verificar el Content-Type
    const contentType = request.headers.get('content-type');
    
    let formData;
    if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
      const text = await request.text();
      const params = new URLSearchParams(text);
      formData = {
        name: params.get('name'),
        email: params.get('email'),
        message: params.get('message')
      };
    } else if (contentType && contentType.includes('multipart/form-data')) {
      const rawFormData = await request.formData();
      formData = {
        name: rawFormData.get('name'),
        email: rawFormData.get('email'),
        message: rawFormData.get('message')
      };
    } else {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Content-Type no soportado' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const { name, email, message } = formData;

    // Validación de campos
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Todos los campos son requeridos' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Email inválido' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Verificar variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Variables de entorno EMAIL_USER o EMAIL_PASS no configuradas');
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Error de configuración del servidor' 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Configurar el transportador de correo
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Recibirás los mensajes en tu propio email
      subject: `Nuevo mensaje de contacto desde 215files de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff2b39;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #ff2b39;">
            <h3>Mensaje:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Mensaje enviado correctamente' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error enviando email:', error);
    
    // Mensajes de error más específicos
    let errorMessage = 'Error al enviar el mensaje';
    if (error.code === 'EAUTH') {
      errorMessage = 'Error de autenticación. Verifica tus credenciales de email.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Error de conexión. Verifica tu conexión a internet.';
    }
    
    return new Response(JSON.stringify({ 
      success: false, 
      message: errorMessage 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 