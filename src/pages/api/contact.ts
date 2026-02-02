import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log("🔵 [API] Recibiendo petición en /api/contact");

    const data = await request.json();

    console.log("📦 [API] Data:", data);

    const { name, email, message } = data;

    console.log("📧 [API] Datos procesados:", { name, email, message });

    // Validar variables de entorno
    if (
      !import.meta.env.NODEMAILER_EMAIL ||
      !import.meta.env.NODEMAILER_APP_PASSWORD
    ) {
      console.error("❌ [API] Variables de entorno no configuradas");
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Configuración de email no disponible",
        }),
        { status: 500 },
      );
    }

    console.log(
      "📮 [API] Configurando transporter con:",
      import.meta.env.NODEMAILER_EMAIL,
    );

    // Configuración del correo (Gmail ejemplo)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.NODEMAILER_EMAIL,
        pass: import.meta.env.NODEMAILER_APP_PASSWORD,
      },
    });

    console.log("📤 [API] Enviando correo...");

    await transporter.sendMail({
      from: import.meta.env.NODEMAILER_EMAIL,
      replyTo: email as string,
      to: import.meta.env.NODEMAILER_EMAIL,
      subject: `Pedido | Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <pre>${message}</pre>
      `,
    });

    console.log("✅ [API] Correo enviado exitosamente");

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ [API] Error:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      { status: 500 },
    );
  }
};
