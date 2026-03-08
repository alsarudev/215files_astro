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
      subject: `Nuevo correo 215files: ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo Mensaje de Contacto</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; -webkit-font-smoothing: antialiased;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 10px;">
                <tr>
                    <td align="center">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #111111; border-radius: 16px; border: 1px solid #222222;">
                            <!-- Cabecera -->
                            <tr>
                                <td align="center" style="padding: 40px 30px 30px; border-bottom: 1px solid #222222;">
                                    <h1 style="margin: 0; font-size: 28px; font-weight: 900; color: #ffffff; letter-spacing: 2px;">
                                        215<span style="color: #ff2b39;">FILES</span>
                                    </h1>
                                    <p style="margin: 15px 0 0; font-size: 12px; color: #888888; text-transform: uppercase; letter-spacing: 2px;">Nuevo Mensaje de Contacto</p>
                                </td>
                            </tr>
                            
                            <!-- Cuerpo -->
                            <tr>
                                <td style="padding: 40px 30px;">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                        <!-- Detalles Remitente -->
                                        <tr>
                                            <td style="padding-bottom: 25px;">
                                                <p style="margin: 0 0 5px; font-size: 12px; color: #666666; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Nombre</p>
                                                <p style="margin: 0; font-size: 18px; color: #ffffff; font-weight: 600;">${name}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding-bottom: 25px;">
                                                <p style="margin: 0 0 5px; font-size: 12px; color: #666666; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Email</p>
                                                <a href="mailto:${email}" style="margin: 0; font-size: 16px; color: #ff2b39; text-decoration: none; font-weight: 600;">${email}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding-bottom: 35px;">
                                                <p style="margin: 0 0 5px; font-size: 12px; color: #666666; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Fecha Local</p>
                                                <p style="margin: 0; font-size: 14px; color: #aaaaaa;">${new Date().toLocaleString('es-ES')}</p>
                                            </td>
                                        </tr>
                                        
                                        <!-- Mensaje Central -->
                                        <tr>
                                            <td style="border-top: 1px solid #222222; padding-top: 35px;">
                                                <p style="margin: 0 0 15px; font-size: 12px; color: #666666; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Contenido del mensaje</p>
                                                <div style="background-color: #050505; border: 1px solid #1a1a1a; border-radius: 12px; padding: 25px; color: #dddddd; font-size: 15px; line-height: 1.6; font-weight: 400;">
                                                    ${message.replace(/\n/g, '<br>')}
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Footer de Acción -->
                            <tr>
                                <td align="center" style="padding: 30px; background-color: #050505; border-top: 1px solid #222222; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;">
                                    <a href="mailto:${email}" style="display: inline-block; padding: 14px 28px; background-color: #ff2b39; color: #ffffff; text-decoration: none; border-radius: 100px; font-weight: bold; font-size: 14px; letter-spacing: 1px; text-transform: uppercase;">
                                        Responder
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
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