import ImageFX from "./ImageFX.js";

async function testarImageFX() {
  // Substitua pelo seu token extraído
  const token = process.env.IMAGEFX_TOKEN || "SEU_TOKEN_AQUI";
  
  const imagefx = new ImageFX({ token });

  try {
    console.log("🎨 Gerando imagem...");
    
    const resultado = await imagefx.generateAndSave({
      prompt: "Um gato astronauta flutuando no espaço, arte digital vibrante",
      filename: "gato_astronauta.png",
      count: 2
    });

    if (resultado.success) {
      console.log("✅", resultado.message);
      console.log("📁 Arquivos:", resultado.files);
    } else {
      console.error("❌ Erro:", resultado.error);
    }

  } catch (error) {
    console.error("💥 Erro inesperado:", error.message);
  }
}

testarImageFX();
