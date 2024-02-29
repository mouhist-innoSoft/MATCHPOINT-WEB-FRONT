<template>
    <div class="glass-card">
      <slot></slot>
    </div>
  </template>
  
  <style scoped>
  .glass-card {
    background: rgba(255, 255, 255, 0.2); /* Cor do vidro meio fosco */
    border-radius: 10px; /* Borda arredondada */
    padding: 20px; /* Espaçamento interno */
    backdrop-filter: blur(5px); /* Desfoque do fundo (efeito vidro) */
    border: 1px solid rgba(255, 255, 255, 0.1); /* Borda com transparência */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
    transition: background 0.3s ease; /* Transição suave para a cor de fundo */
  }
  
  .glass-card:hover {
    background: rgba(255, 255, 255, 0.3); /* Alterar cor ao passar o mouse */
  }
  </style>
  