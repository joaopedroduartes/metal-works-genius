export const WHATSAPP_NUMBER = "5515996272348";
export const PHONE_DISPLAY = "(15) 99627-2348";

export const whatsappLink = (servico = "") => {
  const mensagem = servico
    ? `Olá! Vim pelo site e gostaria de um orçamento para: ${servico}`
    : "Olá! Vim pelo site e gostaria de um orçamento.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
};
