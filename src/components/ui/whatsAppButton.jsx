function WhatsAppButton() {
    const phoneNumber = "94772287228"; // 🔴 replace this
    const message = "Hi, I saw your Frame & Glass website and would like a quote for custom framing.";
  
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
  
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M19.11 17.205c-.372-.186-2.197-1.084-2.537-1.207-.34-.124-.588-.186-.836.186-.248.372-.96 1.207-1.176 1.456-.216.248-.433.279-.805.093-.372-.186-1.57-.579-2.99-1.846-1.105-.986-1.85-2.205-2.066-2.577-.216-.372-.023-.573.163-.759.167-.166.372-.434.558-.651.186-.217.248-.372.372-.62.124-.248.062-.465-.031-.651-.093-.186-.836-2.016-1.145-2.759-.3-.721-.605-.623-.836-.635l-.712-.012c-.248 0-.651.093-.992.465-.341.372-1.302 1.271-1.302 3.1 0 1.829 1.333 3.595 1.519 3.843.186.248 2.627 4.016 6.373 5.63.892.385 1.588.615 2.132.787.896.285 1.712.245 2.356.149.719-.107 2.197-.899 2.508-1.768.31-.868.31-1.612.217-1.768-.093-.155-.341-.248-.713-.434zM16.003 3C9.373 3 4 8.373 4 15c0 2.645.86 5.091 2.324 7.071L4 29l7.137-2.293A11.94 11.94 0 0 0 16.003 27C22.627 27 28 21.627 28 15c0-6.627-5.373-12-11.997-12zm0 21.82a9.82 9.82 0 0 1-5.01-1.38l-.359-.214-4.234 1.36 1.39-4.128-.234-.379a9.79 9.79 0 0 1-1.534-5.249c0-5.45 4.434-9.884 9.981-9.884 5.45 0 9.884 4.434 9.884 9.884 0 5.547-4.434 9.981-9.884 9.981z" />
        </svg>
      </a>
    );
  }
  
  export default WhatsAppButton;
  