const nodemailer = require('nodemailer');

const carteiro = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '',
        pass: ''
    },
    tls: {
        rejectUnauthorized: false
    }
});

carteiro.sendMail({
    from: 'Fortio Transportadora <>',
    to: '',
    subject: 'Teste de envio de e-mail usando o Nodemailer',
    html: '<h1>Olá,</h1><p>Esse é um teste de envio de e-mail usando o Nodemailer.</p>',
    text: 'Esse é um teste de envio de e-mail usando o Nodemailer.'
})
.then(() => {
    console.log('Email enviado com sucesso!');
})
.catch((error) => {
    console.error('Erro ao enviar o e-mail: ', error);
});

// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     },
//     tls: {
//         rejectUnauthorized: false  // 🔥 Ignora erro de certificado SSL
//     }
// });

// const sendEmail = async ({ from, to, subject, html, text }) => {
//     try {
//         const info = await transporter.sendMail({
//             from: from || `Fortio Transportadora <${process.env.EMAIL_USER}>`, 
//             to, 
//             subject, 
//             html, 
//             text
//         });

//         console.log(`✅ E-mail enviado: ${info.messageId}`);
//         return { success: true, message: `E-mail enviado para ${to}` };
//     } catch (error) {
//         console.error('❌ Erro ao enviar e-mail:', error);
//         return { success: false, error: error.message };
//     }
// };

// export default sendEmail;
